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
import com.dta.domain.Utilisateur;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

	@PersistenceContext(unitName = "entityManagerFactory")
	private EntityManager em;
	
	@Override
	@Transactional
	public void create(Utilisateur user) throws UserAlreadyExistsException {
		if(emailExists(user.getEmail()) || loginExists(user.getLogin())) {
			throw new UserAlreadyExistsException();
		}
		else {
			LOGGER.info("Create user with email {}",user.getEmail());
			user.setActive(true);
			user.setRole("c"); // pour client
			em.persist(user);
		}
	}
	
	@Override
	@Transactional
	public void delete(String login) {
		Utilisateur user = find(login);
		user.setActive(false);
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
		List<Utilisateur> users = queryUserByMail.getResultList();
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
		List<Utilisateur> users = queryUserByLogin.getResultList();
		return !users.isEmpty();
	}
	
	public void setEm(EntityManager em) {
		this.em = em;
	}

	@Override
	public Utilisateur find(String login) {
		Query queryUserByLogin = em.createNamedQuery("findUserByLogin", Utilisateur.class);
		queryUserByLogin.setParameter("ulogin", login);
		System.out.println(queryUserByLogin.getResultList().get(0));
		Utilisateur user = (Utilisateur) queryUserByLogin.getResultList().get(0);
		return user;
	}
}
