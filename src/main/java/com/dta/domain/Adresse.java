package com.dta.domain;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.OneToMany;

@Entity
@NamedQueries({
    //@NamedQuery(name="Adresse.findByAdresse", query="SELECT adresse_id FROM Adresse WHERE code_postal=:codepostal AND departement=:departement AND numero=:numero AND pays=:pays AND rue=:rue AND ville=:ville")
})
public class Adresse {

    @Id
    @GeneratedValue
    @Column(name="adresse_id", length=19)
    private int adresseId;
    @Column(name="code_postal", length=10)
    private int postcode;
    @Column(name="departement", length=255)
    private String departement;
    @Column(name="numero", length=10)
    private int number;
    @Column(name="pays", length=255)
    private String country;
    @Column(name="rue", length=255)
    private String street;
    @Column(name="ville", length=255)
    private String city;
    @OneToMany(mappedBy="adresse")
    private List<Commande> commande;
    @ManyToOne
    @JoinTable(name="adresses_utilisateur")
    private Utilisateur utilisateur;

    public Adresse() {
        
    }
    
    public Adresse(int codePostal, String departement, int num, String pays,
            String rue, String ville, List<Commande> commande,
            Utilisateur utilisateur) {
        this.postcode = codePostal;
        this.departement = departement;
        this.number = num;
        this.country = pays;
        this.street = rue;
        this.city = ville;
        this.commande = commande;
        this.utilisateur = utilisateur;
    }

    @Override
    public String toString() {
        return "Adresse [adresseId=" + adresseId + ", postCode=" + postcode
                + ", departement=" + departement + ", number=" + number
                + ", country=" + country + ", street=" + street + ", city="
                + city + "]";
    }

    public int getAdresseId() {
        return adresseId;
    }
    public void setAdresseId(int adresseId) {
        this.adresseId = adresseId;
    }
    public int getPostcode() {
        return postcode;
    }
    public void setPostCode(int postcode) {
        this.postcode = postcode;
    }
    public String getDepartement() {
        return departement;
    }
    public void setDepartement(String departement) {
        this.departement = departement;
    }
    public int getNumber() {
        return number;
    }
    public void setNumber(int number) {
        this.number = number;
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
    public List<Commande> getCommande() {
        return commande;
    }
    public void setCommande(List<Commande> commande) {
        this.commande = commande;
    }
    public Utilisateur getUtilisateur() {
        return utilisateur;
    }
    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }


}