package com.dta.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.List;

import com.dta.domain.Article;
import com.dta.domain.Commande;
import com.dta.domain.LigneCommande;
import com.mysql.fabric.xmlrpc.base.Array;

public class CommandeJson {
	
	private int commandId;
	private String adresse;
	private String commandDate;
	private String paymentInfo;
	
	private List<String> entityName;
	private List<String> entityPrice;

	public CommandeJson(Commande cmd) {
		
		entityName = new ArrayList<String>();
		entityPrice = new ArrayList<String>();
		
		for(LigneCommande lc : cmd.getLigneCommandes()){
			entityName.add(lc.getArticle().getName());
			entityPrice.add(Float.toString(lc.getArticle().getPrice()));
		}
		
		this.commandId = cmd.getCommandeId();	
		
		this.adresse = cmd.getAdresse().getNumber() + " "
				+ cmd.getAdresse().getStreet() + " "
				+ cmd.getAdresse().getPostcode() + " "
				+ cmd.getAdresse().getCity() + ", "
				+ cmd.getAdresse().getCountry().toUpperCase();
		
		this.paymentInfo = cmd.getTypeCarteCredit().toUpperCase() + " "
				+ cmd.getNumCarteCredit().substring(0,5) + "XXXXXXXXXX";
		
		DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		Date date = new Date();
		this.commandDate = dateFormat.format(date);
	}
	

	public CommandeJson(int commandId, String adresse, String commandDate,
			String paymentInfo) {
		super();
		this.commandId = commandId;
		this.adresse = adresse;
		this.commandDate = commandDate;
		this.paymentInfo = paymentInfo;
	}


	public int getCommandId() {
		return commandId;
	}


	public void setCommandId(int commandId) {
		this.commandId = commandId;
	}


	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}


	public String getCommandDate() {
		return commandDate;
	}


	public void setCommandDate(String commandDate) {
		this.commandDate = commandDate;
	}


	public String getPaymentInfo() {
		return paymentInfo;
	}


	public void setPaymentInfo(String paymentInfo) {
		this.paymentInfo = paymentInfo;
	}


	public List<String> getEntityName() {
		return entityName;
	}


	public void setEntityName(List<String> entityName) {
		this.entityName = entityName;
	}


	public List<String> getEntityPrice() {
		return entityPrice;
	}


	public void setEntityPrice(List<String> entityPrice) {
		this.entityPrice = entityPrice;
	}

}
