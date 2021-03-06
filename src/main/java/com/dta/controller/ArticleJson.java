package com.dta.controller;

import com.dta.domain.Article;


public class ArticleJson {

    private int articleId;
    private String name;
    private float price;
    private int stock;
    private String image;
    private String nameProduct;
    private float rating;
    private int nbRaters;
    
    public ArticleJson(Article article) {
        this(article.getArticleId(), article.getName(), article.getPrice(), article.getStock(), article.getImage());
        this.nameProduct = article.getProduit().getNom();
        this.rating = article.getRating();
        this.nbRaters = article.getNbRaters();
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

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public float getRating() {
        return rating;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }

    public int getNbRaters() {
        return nbRaters;
    }

    public void setNbRaters(int nbRaters) {
        this.nbRaters = nbRaters;
    }
    
    @Override
    public String toString() {
        return "ArticleJson [articleId=" + articleId + ", name=" + name
                + ", price=" + price + ", stock=" + stock + ", image=" + image
                + ", nameProduct=" + nameProduct + "]";
    }
}
