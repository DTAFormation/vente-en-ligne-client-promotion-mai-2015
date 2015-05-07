package com.dta.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

import com.dta.domain.Produit;

@Entity
@NamedQueries({
    @NamedQuery(name="Article.findById", query="SELECT a FROM Article a WHERE a.articleId = :id"),
    @NamedQuery(name="Article.findByName", query="SELECT a FROM Article a WHERE a.name = :name"),
    @NamedQuery(name="Article.findAll", query="SELECT a FROM Article a")
}) 
public class Article {
	
	@Id
	@GeneratedValue
	@Column(name="article_id", length=19)
	private int articleId;
	@Column(name="nom", unique=true, length=255)
	private String name;
	@Column(name="image", length=255)
	private String image;
	@Column(name="prix")
	private float price;
	@ManyToOne
    private Produit produit;
    @Column(name="stock", length=19)
    private int stock;

	public Article() {
	}
	public Article(String name, float price) {
		super();
		this.name = name;
		this.price = price;
	}
	public Article(String name, float price, Produit product, int stock) {
        this.name = name;
        this.price = price;
        this.produit = product;
        this.stock = stock;
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
	
	public Produit getProduit() {
        return produit;
    }
    public void setProduit(Produit produit) {
        this.produit = produit;
    }
	
	public int getStock() {
        return stock;
    }
	public void setStock(int stock) {
        this.stock = stock;
    }
    public void setImage(String image) {
        this.image = image;
    }
    
    public String getImage() {
        return image;
    }
	
    @Override
    public String toString() {
        return "Article [articleId=" + articleId + ", nom=" + name + ", price="
                + price + ", produit=" + produit + ", stock=" + stock + "]";
    }
}
