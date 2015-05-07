package com.dta.domain;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;

@Entity
@NamedQueries({
	@NamedQuery(
		name="findUserByEmail",
		query = "SELECT OBJECT(u) FROM Utilisateur u WHERE u.email = :uemail"
	),
	@NamedQuery(
		name="findUserByLogin",
		query = "SELECT OBJECT(u) FROM Utilisateur u WHERE u.login = :ulogin"
	)
})
public class Utilisateur {

	@Id
	@GeneratedValue
	@Column(name="utilisateur_id", length=19)
	private int id;
	
	@Column(name="prenom", length=255)
	private String firstName;
	@Column(name="nom", length=255)
	private String lastName;
	@Column(name="password", length=255)	
	private String password;
	@Column(name="login", length=255 , unique=true)
	private String login;
	@Column(name="email", length=255, unique=true)
	private String email;
	@Column(name="telephone", length=10)
	private String telephone;
	@Column(name="fax", length=10)
	private String fax;
	@Column(name="titre", length=255)
	private String titre;
	
	@Column(name="type_util", length=1)
	private String role;
	
	@Column(name="active", length=1)
	private boolean active;

	@OneToMany(mappedBy="utilisateur", 
			cascade=CascadeType.ALL, 
			fetch=FetchType.EAGER)

	private List<Adresse> adresses;
	@OneToMany(mappedBy="utilisateur")
	private List<Commande> commandes;
	
	public Utilisateur() {
	}

	public Utilisateur(String login, String password) {
		this.login = login;
		this.password = password;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getFax() {
		return fax;
	}

	public void setFax(String fax) {
		this.fax = fax;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}
	
}
