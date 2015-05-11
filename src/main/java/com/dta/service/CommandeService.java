package com.dta.service;

import java.util.List;

import com.dta.domain.Commande;

public interface CommandeService {
	
	public List<Commande> getCommandeByLogin(String login);

}
