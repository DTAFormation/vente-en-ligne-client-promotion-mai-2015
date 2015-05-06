package com.dta.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dta.controller.UserAlreadyExistsException;
import com.dta.domain.User;

@Service
public class UserServiceImpl implements UserService {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

	@PersistenceContext(unitName = "entityManagerFactory")
	private EntityManager em;
	
	@Override
	@Transactional
	public void create(User user) throws UserAlreadyExistsException {
		if(emailExists(user.getEmail()) || loginExists(user.getLogin())) {
			throw new UserAlreadyExistsException();
		}
		else {
			LOGGER.info("Create user with email {}",user.getEmail());
			em.persist(user);
		}
	}

	/**
	 * Méthode pour vérifier si un utilisateur existe déjà en base
	 * en vérifiant si l'adresse mail est présente
	 * retourne VRAI si l'utilisateur existe, FAUX sinon
	 */
	@SuppressWarnings("unchecked")
	@Override
	public boolean emailExists(String uemail) {
		Query queryUserByMail = em.createNamedQuery("findUserByEmail");
		queryUserByMail.setParameter("uemail", uemail);
		List<User> users = queryUserByMail.getResultList();
		return !users.isEmpty();
	}

	/**
	 * Méthode pour vérifier si un utilisateur existe déjà en base
	 * en vérifiant si le login est présent
	 * retourne VRAI si l'utilisateur existe, FAUX sinon
	 */	
	@SuppressWarnings("unchecked")
	@Override
	public boolean loginExists(String ulogin) {
		Query queryUserByLogin = em.createNamedQuery("findUserByLogin");
		queryUserByLogin.setParameter("ulogin", ulogin);
		List<User> users = queryUserByLogin.getResultList();
		return !users.isEmpty();
	}

}
