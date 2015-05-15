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
		Commande commande=new Commande();
		List<Adresse> addresses= new ArrayList<Adresse>();
		address.setUtilisateur(utilisateur);
		addresses.add(address);
		utilisateur.setAdresses(addresses);
		commande.setAdresse(address);
		commande.setUtilisateur(utilisateur);
		commande.setLigneCommandes(lineCommand);
		commande.setDateCommande(new Date(System.currentTimeMillis()));
		
		em.persist(address);
		em.merge(utilisateur);
		for(LigneCommande lc: lineCommand){
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
	
	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}
}
