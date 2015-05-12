package com.dta.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Service;

import com.dta.domain.Adresse;
import com.dta.domain.Commande;
import com.dta.domain.LigneCommande;
import com.dta.domain.Utilisateur;

@Service
public class CommandeServiceImpl implements CommandeService {
	
	private EntityManager em;
	private Adresse address;
	private List<LigneCommande> lineCommand = new ArrayList<LigneCommande>();
	
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
	public void saveCommande() {
		Commande commande=new Commande();
		commande.setAdresse(address);
		commande.setLigneCommandes(lineCommand);
		commande.setDateCommande(new Date(System.currentTimeMillis()));
		reset();
	}

	@Override
	public void addLineCommand(LigneCommande lineCommand) {
		this.lineCommand.add(lineCommand);
		System.out.println(this.lineCommand.size());
		for(LigneCommande lc:this.lineCommand){
			System.out.println(lc.toString());
		}
		System.out.println("");
	}

	@Override
	public void setAddress(Adresse address) {
		this.address=address;
	}
	
	private void reset(){
		address=null;
		lineCommand = new ArrayList<LigneCommande>();
	}
}
