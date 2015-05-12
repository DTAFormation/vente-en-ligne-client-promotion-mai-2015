package com.dta.controller;

import java.util.Date;

import com.dta.domain.Commande;

public class CommandeJson {
	
	private int postalCode;
	private String department;
	private int phoneNumber;
	private String country;
	private String street;
	private String city;
	private int commandId;
	private Date commandDate;
	private Date creditCardExpCard;
	private String creditCardNum;
	private String creditCardType;

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


	public CommandeJson(int postalCode, String department, int phoneNumber,
			String country, String street, String city, int commandId,
			Date commandDate, Date creditCardExpCard, String creditCardNum,
			String creditCardType) {
		super();
		this.postalCode = postalCode;
		this.department = department;
		this.phoneNumber = phoneNumber;
		this.country = country;
		this.street = street;
		this.city = city;
		this.commandId = commandId;
		this.commandDate = commandDate;
		this.creditCardExpCard = creditCardExpCard;
		this.creditCardNum = creditCardNum;
		this.creditCardType = creditCardType;
	}


	public int getPostalCode() {
		return postalCode;
	}


	public void setPostalCode(int postalCode) {
		this.postalCode = postalCode;
	}


	public String getDepartment() {
		return department;
	}


	public void setDepartment(String department) {
		this.department = department;
	}


	public int getPhoneNumber() {
		return phoneNumber;
	}


	public void setPhoneNumber(int phoneNumber) {
		this.phoneNumber = phoneNumber;
	}


	public String getCountry() {
		return country;
	}


	public void setCountry(String country) {
		this.country = country;
	}


	public String getStreet() {
		return street;
	}


	public void setStreet(String street) {
		this.street = street;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public int getCommandId() {
		return commandId;
	}


	public void setCommandId(int commandId) {
		this.commandId = commandId;
	}


	public Date getCommandDate() {
		return commandDate;
	}


	public void setCommandDate(Date commandDate) {
		this.commandDate = commandDate;
	}


	public Date getCreditCardExpCard() {
		return creditCardExpCard;
	}


	public void setCreditCardExpCard(Date creditCardExpCard) {
		this.creditCardExpCard = creditCardExpCard;
	}


	public String getCreditCardNum() {
		return creditCardNum;
	}


	public void setCreditCardNum(String creditCardNum) {
		this.creditCardNum = creditCardNum;
	}


	public String getCreditCardType() {
		return creditCardType;
	}


	public void setCreditCardType(String creditCardType) {
		this.creditCardType = creditCardType;
	}

}
