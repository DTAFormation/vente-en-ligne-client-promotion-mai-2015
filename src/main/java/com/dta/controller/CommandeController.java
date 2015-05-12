package com.dta.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.dta.domain.Commande;
import com.dta.domain.Utilisateur;
import com.dta.service.CommandeService;

@RestController
@RequestMapping("/commande")
public class CommandeController {
	
	@Autowired
	private CommandeService commandeService;
	
	@RequestMapping(value="/commandes/{login}")
	@ResponseBody
	public List<CommandeJson> getCommande(@PathVariable("login") String login) {
		
		List<Commande> cmds = commandeService.getCommandeByLogin(login);
		List<CommandeJson> cmdsJson = new ArrayList<CommandeJson>();
		
		for(Commande cmd : cmds){
			cmdsJson.add(new CommandeJson(cmd));
		}
		return cmdsJson;
	}
	
	@RequestMapping(value="/cmds")
	@ResponseBody
	public List<CommandeJson> getCommande() {
		
		List<CommandeJson> cmdsJson = new ArrayList<CommandeJson>(5);
		
		for(int i=0; i<10; i++){
			cmdsJson.add(new CommandeJson(i, "52 Chemin du Bugnon 74130 Mont-Saxonnex France", "05/05/2005", "VISA 54586XXXXXXXXXX"));
		}
		return cmdsJson;
	}
}
