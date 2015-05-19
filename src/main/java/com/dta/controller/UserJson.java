package com.dta.controller;

import com.dta.domain.Utilisateur;

public class UserJson {

    private int id;

    private String firstName;
    private String lastName;    
    private String password;
    private String login;
    private String email;
    private String telephone;
    private String fax;
    private String titre;
    
    private String role;
    
    private boolean active;
    
    public UserJson(Utilisateur utilisateur) {
        this(utilisateur.getId(), 
                utilisateur.getFirstName(), 
                utilisateur.getLastName(), 
                utilisateur.getPassword(), 
                utilisateur.getLogin(),
                utilisateur.getEmail(), 
                utilisateur.getTelephone(), 
                utilisateur.getFax(), 
                utilisateur.getTitre(), 
                utilisateur.getRole());
    }

    public UserJson(int id, String firstName, String lastName, String password,
            String login, String email, String telephone, String fax,
            String titre, String role) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.login = login;
        this.email = email;
        this.telephone = telephone;
        this.fax = fax;
        this.titre = titre;
        this.role = role;
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

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
    
}
