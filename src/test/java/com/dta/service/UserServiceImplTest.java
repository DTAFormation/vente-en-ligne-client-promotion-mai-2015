package com.dta.service;

import static org.junit.Assert.*; // évite les Assert.assertEquals
import static org.mockito.Mockito.*; // évite les Mockito.when ou Mockito.verify

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dta.controller.UserAlreadyExistsException;
import com.dta.domain.User;

@RunWith(MockitoJUnitRunner.class)
public class UserServiceImplTest {

	private static final Logger LOG = LoggerFactory.getLogger(UserServiceImpl.class);

	@Mock 
	private EntityManager em;
	
	@Mock 
	private Query queryEmail;
	
	@Mock 
	private Query queryLogin;	
	
	// Classe à tester
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
        user.setEmail("edward.nigma@test.fr");
        user.setFirstName("Edward");
        user.setLogin("login");

        // Programmer le comportement du mock
        when(em.createNamedQuery("findUserByEmail")).thenReturn(queryEmail);
        when(em.createNamedQuery("findUserByLogin")).thenReturn(queryLogin);
        when(queryEmail.getResultList()).thenReturn(new ArrayList<User>());
        when(queryLogin.getResultList()).thenReturn(new ArrayList<User>());
        
        LOG.info("Lorsque service.create(user)");

        // Méthode à tester!!!
        service.create(user);

        // Vérifier que la méthode getResultList() du mock query a bien été invoké.
        LOG.info("Alors l'objet user est persisté");
        verify(queryEmail).getResultList();
        verify(queryLogin).getResultList();
        
        // Vérifier que le mock em a bien été appelé avec sa méthode persist avec l'objet user attendu
        verify(em).persist(user);
    }

    @Test(expected = UserAlreadyExistsException.class)
    public void create_user_avec_email_existant_deja_en_base() {
    	
        LOG.info("Etant donné un objet user avec une adresse email existant en base");

        // Objet user en entrée du service create
        User user = new User();
        user.setEmail("edward.nigma@test.fr");
        user.setFirstName("Edward");

        // Simule la présence d'un user en base 
        List<User> usersEnBase = new ArrayList<>();
        usersEnBase.add(new User());

        // Programmer le comportement du mock
        // Comme l'email est testé avant le login pas besoin de simuler la réponse findUserByLogin
        when(em.createNamedQuery("findUserByEmail")).thenReturn(queryEmail);
        when(queryEmail.getResultList()).thenReturn(usersEnBase);
        
        LOG.info("Lorsque service.create(user), l'exception UserAlreadyExistsException doit être lancée");
        
        service.create(user); // doit lancer l'exception UserAlreadyExistsException
    }

    @Test(expected = UserAlreadyExistsException.class)
    public void create_user_avec_login_existant_deja_en_base() {
    	
        LOG.info("Etant donné un objet user avec un login existant en base");

        // Objet user en entrée du service create
        User user = new User();
        user.setLogin("login");
        user.setFirstName("Edward");

        // Simule la présence d'un user en base
        List<User> usersEnBase = new ArrayList<>();
        usersEnBase.add(new User());

        // Programmer le comportement du mock
        // Comme l'email est testé avant le login, il faut simuler la réponse de findUserByEmail
        when(em.createNamedQuery("findUserByEmail")).thenReturn(queryEmail);
        when(em.createNamedQuery("findUserByLogin")).thenReturn(queryLogin);
        when(queryEmail.getResultList()).thenReturn(new ArrayList<User>());                
        when(queryLogin.getResultList()).thenReturn(usersEnBase);
        
        LOG.info("Lorsque service.create(user), l'exception UserAlreadyExistsException doit être lancée");
        
        service.create(user); // doit lancer l'exception UserAlreadyExistsException
    }
    
    @Test
    public void emailExists_avec_email_existant() {
        
    	LOG.info("Etant donné une adresse email existant en base");
        
    	// Simule la présence d'un user en base
        List<User> usersEnBase = new ArrayList<>();
        usersEnBase.add(new User());
        
        // Programmer le comportement du mock
        when(em.createNamedQuery("findUserByEmail")).thenReturn(queryEmail);
        when(queryEmail.getResultList()).thenReturn(usersEnBase);

        LOG.info("Lorsque service.userExists(email)");

        boolean result = service.emailExists("test@email.fr");

        LOG.info("Alors le service renvoie vrai");
        
        assertEquals("userExists devrait retourner vrai si l'email est en base", true, result);
    }

    @Test
    public void emailExists_avec_email_non_existant() {
        
    	LOG.info("Etant donné une adresse email n'existant pas en base");
        
    	// Programmer le comportement du mock
        when(em.createNamedQuery("findUserByEmail")).thenReturn(queryEmail);
        when(queryEmail.getResultList()).thenReturn(new ArrayList<User>());

        LOG.info("Lorsque service.userExists(email)");
        
        boolean result = service.emailExists("test@email.fr");

        LOG.info("Alors le service renvoie faux");
        
        assertEquals("userExists devrait retourner faux si l'email n'est pas en base", false, result);
    }

    @Test
    public void loginExists_avec_login_existant() {
        
    	LOG.info("Etant donné une adresse email existant en base");
        
    	// Simule la présence d'un user en base
        List<User> usersEnBase = new ArrayList<>();
        usersEnBase.add(new User());
        
        // Programmer le comportement du mock
        when(em.createNamedQuery("findUserByLogin")).thenReturn(queryLogin);
        when(queryLogin.getResultList()).thenReturn(usersEnBase);

        LOG.info("Lorsque service.userExists(email)");

        boolean result = service.loginExists("test");

        LOG.info("Alors le service renvoie vrai");
        
        assertEquals("userExists devrait retourner vrai si l'email est en base", true, result);
    }

    @Test
    public void loginExists_avec_login_non_existant() {
        
    	LOG.info("Etant donné une adresse email n'existant pas en base");
        
    	// Programmer le comportement du mock
        when(em.createNamedQuery("findUserByLogin")).thenReturn(queryLogin);
        when(queryLogin.getResultList()).thenReturn(new ArrayList<User>());

        LOG.info("Lorsque service.userExists(email)");
        
        boolean result = service.loginExists("test");

        LOG.info("Alors le service renvoie faux");
        
        assertEquals("userExists devrait retourner faux si l'email n'est pas en base", false, result);
    }    
}
