package com.dta.controller;

import com.dta.domain.Article;


public class ArticleJson {

	private int articleId;
	private String name;
	private float price;
    private int stock;
    private String image;
    
    public ArticleJson(Article article) {
    	this(article.getArticleId(), article.getName(), article.getPrice(), article.getStock(), article.getImage());
    }
    
	public ArticleJson(int articleId, String name, float price, int stock, String image) {
		this.articleId = articleId;
		this.name = name;
		this.price = price;
		this.stock = stock;
		this.image  = image;
	}

	public int getArticleId() {
		return articleId;
	}
	public void setArticleId(int articleId) {
		this.articleId = articleId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public int getStock() {
		return stock;
	}
	public void setStock(int stock) {
		this.stock = stock;
	}

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
	
}
