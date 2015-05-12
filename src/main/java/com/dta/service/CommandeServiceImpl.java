package com.dta.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Service;

import com.dta.domain.Commande;
import com.dta.domain.Utilisateur;

@Service
public class CommandeServiceImpl implements CommandeService {
	
	private EntityManager em;
	
	@PersistenceContext(unitName = "entityManagerFactory")
	public void setEm(EntityManager em) {
		this.em = em;
	}

	@Override
	public List<Commande> getCommandeByLogin(String login) {
		
		Query queryUserByLogin = em.createNamedQuery("findUserByLogin");
		queryUserByLogin.setParameter("ulogin", login);
		Utilisateur user = (Utilisateur) queryUserByLogin.getSingleResult();
		
		return user.getCommandes();
	}
}
