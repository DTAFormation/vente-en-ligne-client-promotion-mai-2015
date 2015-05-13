package com.dta.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dta.domain.Adresse;
import com.dta.domain.Commande;
import com.dta.domain.LigneCommande;
import com.dta.domain.Utilisateur;

@Service
@Transactional 
public class CommandeServiceImpl implements CommandeService {

	private EntityManager em;

	private Adresse address;
	private List<LigneCommande> lineCommand = new ArrayList<LigneCommande>();
	private Utilisateur utilisateur;
	
	

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




	@Override
	public void addLineCommand(LigneCommande lineCommand) {
		this.lineCommand.add(lineCommand);
	}



	@Override
	public void saveCommande() {
		/*
		 * Ajouter une suppression de la commande Non valide
		 */
		
		Commande commande=new Commande();
		address.setUtilisateur(utilisateur);
		commande.setAdresse(address);
		commande.setLigneCommandes(lineCommand);
		commande.setDateCommande(new Date(System.currentTimeMillis()));
		commande.setValidate(true);
		
		
		
		em.merge(utilisateur);
		em.persist(address);
		for(LigneCommande lc : lineCommand){
			lc.setCommande(commande);
			em.persist(lc);
		}
		em.persist(commande);
		
		reset();
	}
	
	private void reset(){
		address=null;
		lineCommand = new ArrayList<LigneCommande>();
	}
	
	
	@Override
	public void setAddress(Adresse address) {
		this.address=address;
	}
	
	public Utilisateur getUtilisateur() {
		return utilisateur;
	}
	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

}
