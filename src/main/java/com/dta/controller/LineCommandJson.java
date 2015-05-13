package com.dta.controller;

import java.util.Hashtable;

import com.dta.domain.LigneCommande;

public class LineCommandJson {
	
	private Hashtable<String, String> entity;
	
	private int quantity;

	public LineCommandJson(Hashtable<String, String> entity, int stock) {
		super();
		this.entity = entity;
		this.quantity = stock;
	}
	
	public LineCommandJson(LigneCommande line){
		
		this.quantity = line.getQuantity();
		
		/*entity = new Hashtable<String, String>();
		
		this.entity.put("name", line.getArticle().getName());
		this.entity.put("prix", Float.toString(line.getArticle().getPrice()));
		*/
		System.out.println(line.getArticle().toString());
	}
	
	

}
