package com.dta.service;

import java.util.List;

import com.dta.domain.Adresse;
import com.dta.domain.Commande;
import com.dta.domain.LigneCommande;

public interface CommandeService {
	public List<Commande> getCommandeByLogin(String login);
	public void saveCommande();
	public void addLineCommand(LigneCommande lineCommand);
	public void setAddress(Adresse address);
}
