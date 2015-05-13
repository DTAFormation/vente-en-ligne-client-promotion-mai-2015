package com.dta.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.dta.domain.Commande;
import com.dta.domain.LigneCommande;
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
}
