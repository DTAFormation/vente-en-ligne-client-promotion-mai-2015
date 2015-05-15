package com.dta.controller;

import com.dta.domain.LigneCommande;

public class LineCommandJson {
	
	private int quantity;
	private ArticleJson entity;
	
	public LineCommandJson(LigneCommande lc){
		this.quantity = lc.getQuantity();
		this.entity = new ArticleJson(lc.getArticle());
	}
	
	public LineCommandJson(int quantity, ArticleJson entity) {
		super();
		this.quantity = quantity;
		this.entity = entity;
	}
	
	public int getQuantity() {
		return quantity;
	}
	
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public ArticleJson getEntity() {
		return entity;
	}
	
	public void setEntity(ArticleJson entity) {
		this.entity = entity;
	}

	@Override
	public String toString() {
		return "LineCommandJson [quantity=" + quantity + ", entity=" + entity
				+ "]";
	}
}
