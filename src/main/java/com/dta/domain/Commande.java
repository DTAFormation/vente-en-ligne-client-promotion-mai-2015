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
	@NamedQuery(
		name="findCommandeByUser",
		query = "SELECT OBJECT(c) FROM Commande c WHERE c.utilisateur = :user"
	)
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
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinTable(name="commandes_adresse")
	private Adresse adresse;
	@ManyToOne
	@JoinTable(name="commandes_utilisateur")
	private Utilisateur utilisateur;
	@OneToMany(mappedBy="commande")
	private List<LigneCommande> ligneCommandes;

	public Commande() {}
	public Commande(Date dateExpCarteCredit, Date dateCommande,
			String numCarteCredit, String typeCarteCredit, Adresse adresse,
			Utilisateur utilisateur) {
		this.dateExpCarteCredit = dateExpCarteCredit;
		this.dateCommande = dateCommande;
		this.numCarteCredit = numCarteCredit;
		this.typeCarteCredit = typeCarteCredit;
		this.adresse = adresse;
		this.utilisateur = utilisateur;
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
	
	@Override
	public String toString() {
		return "Commande [commandeId=" + commandeId + ", dateExpCarteCredit="
				+ dateExpCarteCredit + ", dateCommande=" + dateCommande
				+ ", numCarteCredit=" + numCarteCredit + ", typeCarteCredit="
				+ typeCarteCredit + ", adresse=" + adresse + ", utilisateur="
				+ utilisateur.getId() + "]";
	}	
}