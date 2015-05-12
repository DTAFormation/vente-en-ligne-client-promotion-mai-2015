package com.dta.controller;

import java.util.Date;

import com.dta.domain.Commande;

public class CommandeJson {
	
	private int codePostal;
	private String departement;
	private int num;
	private String pays;
	private String rue;
	private String ville;
	private int commandeId;
	private Date dateCommande;
	private Date dateExpCarteCredit;
	private String numCarteCredit;
	private String typeCarteCredit;

	public CommandeJson(Commande cmd) {
		this(cmd.getAdresse().getPostcode(),
				cmd.getAdresse().getDepartement(),
				cmd.getAdresse().getNumber(),
				cmd.getAdresse().getCountry(),
				cmd.getAdresse().getStreet(),
				cmd.getAdresse().getCity(),
				cmd.getCommandeId(),
				cmd.getDateCommande(),
				cmd.getDateExpCarteCredit(),
				cmd.getNumCarteCredit(),
				cmd.getTypeCarteCredit());
	}

	public CommandeJson(int codePostal, String departement, int num,
			String pays, String rue, String ville, int commandeId,
			Date dateCommande, Date dateExpCarteCredit, String numCarteCredit,
			String typeCarteCredit) {
		
		this.codePostal = codePostal;
		this.departement = departement;
		this.num = num;
		this.pays = pays;
		this.rue = rue;
		this.ville = ville;
		this.commandeId = commandeId;
		this.dateCommande = dateCommande;
		this.dateExpCarteCredit = dateExpCarteCredit;
		this.numCarteCredit = numCarteCredit;
		this.typeCarteCredit = typeCarteCredit;
	}

	public int getCodePostal() {
		return codePostal;
	}

	public void setCodePostal(int codePostal) {
		this.codePostal = codePostal;
	}

	public String getDepartement() {
		return departement;
	}

	public void setDepartement(String departement) {
		this.departement = departement;
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public String getPays() {
		return pays;
	}

	public void setPays(String pays) {
		this.pays = pays;
	}

	public String getRue() {
		return rue;
	}

	public void setRue(String rue) {
		this.rue = rue;
	}

	public String getVille() {
		return ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	public int getCommandeId() {
		return commandeId;
	}

	public void setCommandeId(int commandeId) {
		this.commandeId = commandeId;
	}

	public Date getDateCommande() {
		return dateCommande;
	}

	public void setDateCommande(Date dateCommande) {
		this.dateCommande = dateCommande;
	}

	public Date getDateExpCarteCredit() {
		return dateExpCarteCredit;
	}

	public void setDateExpCarteCredit(Date dateExpCarteCredit) {
		this.dateExpCarteCredit = dateExpCarteCredit;
	}

	public String getNumCarteCredit() {
		return numCarteCredit;
	}

	public void setNumCarteCredit(String numCarteCredit) {
		this.numCarteCredit = numCarteCredit;
	}

	public String getTypeCarteCredit() {
		return typeCarteCredit;
	}

	public void setTypeCarteCredit(String typeCarteCredit) {
		this.typeCarteCredit = typeCarteCredit;
	}

}
