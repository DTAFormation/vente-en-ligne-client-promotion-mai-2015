package com.dta.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

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
		
		List<Commande> commandes = this.findCommandeByLogin(login);
		List<Commande> validCommandes = new ArrayList<Commande>();
		
		for(Commande cmd : commandes){
			if(cmd.isValidate()){
				validCommandes.add(cmd);
			}
		}
		return validCommandes;
	}
	
	@Override
	public List<Commande> getBasketByLogin(String login) {
		
		List<Commande> commandes = this.findCommandeByLogin(login);
		List<Commande> unvalidCommandes = new ArrayList<Commande>();
		
		for(Commande cmd : commandes){
			if(!cmd.isValidate()){
				unvalidCommandes.add(cmd);
			}
		}
		return unvalidCommandes;
	}
	
	public List<Commande> findCommandeByLogin(String login) {
		Query queryUserByLogin = em.createNamedQuery("findUserByLogin");
		queryUserByLogin.setParameter("ulogin", login);
		Utilisateur user = (Utilisateur) queryUserByLogin.getSingleResult();
		return user.getCommandes();
	}

	@Override
	public void addLineCommand(LigneCommande lineCommand) {
		this.lineCommand.add(lineCommand);
	}
	
	private void reset(){
		address=null;
		lineCommand = new ArrayList<LigneCommande>();
	}
	
	@Override
	public void saveCommande(){
		boolean newCommand =false;
		Commande command = SearchIdCommandeNotValidate();
		if(command == null){
			command=new Commande();
			newCommand=true;
		}
		
		List<Adresse> addresses= new ArrayList<Adresse>();
		address.setUtilisateur(utilisateur);
		addresses.add(address);
		utilisateur.setAdresses(addresses);
		command.setAdresse(address);
		command.setUtilisateur(utilisateur);
		command.setDateCommande(new Date(System.currentTimeMillis()));
		command.setValidate(true);
		
		em.persist(address);
		em.merge(utilisateur);
		
		if(newCommand){
			for(LigneCommande lc: lineCommand){
				lc.setCommande(command);
				em.persist(lc);
			}
			em.persist(command);
		}
		else{
			em.merge(command);
		}
		reset();
	}
	
	public Commande SearchIdCommandeNotValidate(){
		Query queryCommandsByValidate = em.createNamedQuery("Commande.findByValidateFalse");
		List<Commande> commands = queryCommandsByValidate.getResultList();
		if(commands.size() != 0)
			return commands.get(0);
		else{
			return null;
		}
	}
	
	
	
	@Override
	public void setAddress(Adresse address) {
		this.address=address;
	}
	
	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}
}
