package com.dta.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;


@Entity
public class LigneCommande {

    @Id
    @GeneratedValue
    private int ligneCommandeId;
    
    @Column(name="quantite")
    private int quantity;
    
    @ManyToOne
    private Article article; 
    
    @ManyToOne 
    private Commande commande;

    public LigneCommande() {
        super();
    }

    public LigneCommande(int quantite, Article article, Commande commande) {
        super();
        this.quantity = quantite;
        this.article = article;
        this.commande = commande;
    }


    @Override
    public String toString() {
        return "LigneCommande [quantite=" + quantity + ", article=" + article
                + "]";
    }
    
    public int getLigneCommandeId() {
        return ligneCommandeId;
    }

    public void setLigneCommandeId(int ligneCommandeId) {
        this.ligneCommandeId = ligneCommandeId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantite) {
        this.quantity = quantite;
    }

    public Article getArticle() {
        return article;
    }

    public void setArticle(Article article) {
        this.article = article;
    }

    public Commande getCommande() {
        return commande;
    }

    public void setCommande(Commande commande) {
        this.commande = commande;
    }
    
}

