package com.dta.service;

import java.util.List;

import com.dta.domain.Adresse;
import com.dta.domain.Commande;
import com.dta.domain.LigneCommande;
import com.dta.domain.Utilisateur;

public interface CommandeService {
    public List<Commande> getCommandeByLogin(String login);
    public List<Commande> getBasketByLogin(String login);
    public void saveCommande();
    public void addLineCommand(LigneCommande lineCommand);
    public void setAddress(Adresse address);
    public void setUtilisateur(Utilisateur utilisateur);
    public void saveBasket(String login);
}
