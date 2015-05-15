package com.dta.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.dta.domain.Commande;
import com.dta.domain.LigneCommande;

public class CommandeJson {

	private int commandId;
	private String adresse;
	private String commandDate;
	private String paymentInfo;

	private List<LineCommandJson> entities;

	public CommandeJson(Commande cmd) {

		entities = new ArrayList<LineCommandJson>();

		for(LigneCommande lc : cmd.getLigneCommandes()){
			entities.add(new LineCommandJson(lc));
		}

		this.commandId = cmd.getCommandeId();	

		this.adresse = cmd.getAdresse().getNumber() + " "
				+ cmd.getAdresse().getStreet() + " "
				+ cmd.getAdresse().getPostcode() + " "
				+ cmd.getAdresse().getCity() + ", "
				+ cmd.getAdresse().getCountry().toUpperCase();

		if(this.paymentInfo != null){
			this.paymentInfo = cmd.getTypeCarteCredit().toUpperCase() + " "
					+ cmd.getNumCarteCredit().substring(0,5) + "XXXXXXXXXX";

		}

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

	public List<LineCommandJson> getCmdLines() {
		return entities;
	}

	public void setCmdLines(List<LineCommandJson> cmdLines) {
		this.entities = cmdLines;
	}


	@Override
	public String toString() {
		return "CommandeJson [commandId=" + commandId + ", adresse=" + adresse
				+ ", commandDate=" + commandDate + ", paymentInfo="
				+ paymentInfo + ", cmdLines=" + entities + "]";
	}
}
