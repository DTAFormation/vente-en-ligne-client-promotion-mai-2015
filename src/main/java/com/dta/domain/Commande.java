package com.dta.domain;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

@Entity
@NamedQueries({
    @NamedQuery(name="Commande.findByValidateFalse", query="SELECT c FROM Commande c WHERE c.validate=false")
})
public class Commande {

    @Id
    @GeneratedValue
    @Column(name="commande_id", length=19)
    private int commandeId;
    @Column(name="date_expiration_cartecredit", length=6)
    private Date dateExpCarteCredit;
    @Column(name="date_commande", length=6)
    private Date dateCommande;
    @Column(name="num_cartecredit", length=255)
    private String numCarteCredit;
    @Column(name="type_cartecredit", length=255)
    private String typeCarteCredit;
    @Column(name="validate", length=1)
    private boolean validate;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinTable(name="commandes_adresse")
    private Adresse adresse;
    @ManyToOne
    @JoinTable(name="commandes_utilisateur")
    private Utilisateur utilisateur;
    @OneToMany(mappedBy="commande")
    @LazyCollection(LazyCollectionOption.FALSE)
    private List<LigneCommande> ligneCommandes;


    public Commande() {        
    }
    
    public Commande(Date dateExpCarteCredit, Date dateCommande,
            String numCarteCredit, String typeCarteCredit, Adresse adresse,
            Utilisateur utilisateur, boolean validate) {
        this.dateExpCarteCredit = dateExpCarteCredit;
        this.dateCommande = dateCommande;
        this.numCarteCredit = numCarteCredit;
        this.typeCarteCredit = typeCarteCredit;
        this.adresse = adresse;
        this.utilisateur = utilisateur;
        this.validate = validate;
    }

    public int getCommandeId() {
        return commandeId;
    }
    
    public void setCommandeId(int commandeId) {
        this.commandeId = commandeId;
    }
    
    public Date getDateExpCarteCredit() {
        return dateExpCarteCredit;
    }
    
    public void setDateExpCarteCredit(Date dateExpCarteCredit) {
        this.dateExpCarteCredit = dateExpCarteCredit;
    }
    
    public Date getDateCommande() {
        return dateCommande;
    }
    
    public void setDateCommande(Date dateCommande) {
        this.dateCommande = dateCommande;
    }
    
    public String getNumCarteCredit() {
        return numCarteCredit;
    }
    
    public void setNumCarteCredit(String numCarteCredit) {
        this.numCarteCredit = numCarteCredit;
    }
    
    public String getTypeCarteCredit() {
        return typeCarteCredit;
    }
    
    public void setTypeCarteCredit(String typeCarteCredit) {
        this.typeCarteCredit = typeCarteCredit;
    }
    
    public Adresse getAdresse() {
        return adresse;
    }
    
    public void setAdresse(Adresse adresse) {
        this.adresse = adresse;
    }
    
    public Utilisateur getUtilisateur() {
        return utilisateur;
    }
    
    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }
    
    public boolean isValidate() {
        return validate;
    }
    
    public void setValidate(boolean validate) {
        this.validate = validate;
    }
    
    public List<LigneCommande> getLigneCommandes() {
        return ligneCommandes;
    }

    public void setLigneCommandes(List<LigneCommande> ligneCommandes) {
        this.ligneCommandes = ligneCommandes;
    }

    @Override
    public String toString() {
        return "Commande [commandeId=" + commandeId + ", dateExpCarteCredit="
                + dateExpCarteCredit + ", dateCommande=" + dateCommande
                + ", numCarteCredit=" + numCarteCredit + ", typeCarteCredit="
                + typeCarteCredit + ", validate=" + validate + ", adresse="
                + adresse + ", utilisateur=" + utilisateur + "]";
    }
}