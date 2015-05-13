package com.dta.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.dta.domain.Commande;

public class CommandeJson {
	
	private int commandId;
	private String adresse;
	private String commandDate;
	private String paymentInfo;


	public CommandeJson(Commande cmd) {
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

}
