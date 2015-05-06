package com.dta.service;

import com.dta.controller.UserAlreadyExistsException;
import com.dta.domain.User;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.ArrayList;
import java.util.List;

@RunWith(MockitoJUnitRunner.class)
public class UserServiceImplTest {

    private static final Logger LOG = LoggerFactory.getLogger(UserServiceImplTest.class);

    @Mock private EntityManager em;

    @Mock private Query query;

    private UserServiceImpl service;

    @Before
    public void setUp() {
        service = new UserServiceImpl();
        service.setEm(em);
    }

    @Test
    public void create_user_cas_nominal() {

        LOG.info("Etant donné un objet user avec toutes ses informations correctement renseignées");

        // Objet user en entrée du service create
        User user = new User();
        user.setEmail("test@test.fr");
        user.setFirstName("Alain");

        // Programmer le comportement du mock
        when(em.createNamedQuery("findUserByEmail")).thenReturn(query);
        when(query.getResultList()).thenReturn(new ArrayList<User>());

        LOG.info("Lorsque service.create(user)");

        service.create(user);

        // Vérifier que la méthode getResultList() du mock query a bien été invoké.
        LOG.info("Alors l'objet user est persisté");
        verify(query).getResultList();

        // Vérifier que le mock em a bien été appelé avec sa méthode persist avec l'objet user attendu
        verify(em).persist(user);

    }

    @Test(expected = UserAlreadyExistsException.class)
    public void create_user_avec_email_existant_deja_en_base() {
        LOG.info("Etant donné un objet user avec une adresse email existant en base");


        // Objet user en entrée du service create
        User user = new User();
        user.setEmail("test@test.fr");
        user.setFirstName("Alain");

        List<User> usersEnBase = new ArrayList<>();
        usersEnBase.add(new User());

        // Programmer le comportement du mock
        when(em.createNamedQuery("findUserByEmail")).thenReturn(query);
        when(query.getResultList()).thenReturn(usersEnBase);
        LOG.info("Lorsque service.create(user), l'exception UserAlreadyExistsException doit être lancée");
        service.create(user); // doit lancer l'exception UserAlreadyExistsException
    }

    @Test
    public void userExists_avec_email_existant() {
        LOG.info("Etant donné une adresse email existant en base");
        // Programmer le comportement du mock
        List<User> usersEnBase = new ArrayList<>();
        usersEnBase.add(new User());
        when(em.createNamedQuery("findUserByEmail")).thenReturn(query);
        when(query.getResultList()).thenReturn(usersEnBase);

        LOG.info("Lorsque service.userExists(email)");

        boolean result = service.userExists("test@email.fr");

        LOG.info("Alors le service renvoie vrai");
        assertEquals("userExists devrait retourner vrai si l'email est en base", true, result);
    }

    @Test
    public void userExists_avec_email_non_existant() {
        LOG.info("Etant donné une adresse email n'existant pas en base");
        // Programmer le comportement du mock
        when(em.createNamedQuery("findUserByEmail")).thenReturn(query);
        when(query.getResultList()).thenReturn(new ArrayList<User>());

        LOG.info("Lorsque service.userExists(email)");
        boolean result = service.userExists("test@email.fr");

        LOG.info("Alors le service renvoie faux");
        assertEquals("userExists devrait retourner faux si l'email n'est pas en base", false, result);
    }



}