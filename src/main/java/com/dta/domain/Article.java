package com.dta.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Article {
	
	@Id
	@GeneratedValue
	private int article_id;
	
	private String name;
	private String price;
	

	public Article() {
	}
	public Article(String name, String price) {
		super();
		this.name = name;
		this.price = price;
	}
	public int getArticle_id() {
		return article_id;
	}
	public void setArticle_id(int article_id) {
		this.article_id = article_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String prix) {
		this.price = prix;
	}
	
	

}
