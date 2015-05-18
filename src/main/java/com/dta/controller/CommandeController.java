package com.dta.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dta.domain.Adresse;
import com.dta.domain.Commande;
import com.dta.domain.LigneCommande;
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
	
	@RequestMapping(value="/basket/{login}")
	@ResponseBody
	public List<LineCommandJson> getBasket(@PathVariable("login") String login) {
		
		List<Commande> cmds = commandeService.getBasketByLogin(login);
		CommandeJson cmdJson = null;
		
		if(cmds.size() >= 1){
			cmdJson = new CommandeJson(cmds.get(0));
		}else{
			return new ArrayList<LineCommandJson>();
		}
		
		return cmdJson.getCmdLines();
	}
	
	@RequestMapping(value="/basket", method=RequestMethod.POST)
	@ResponseStatus(value = HttpStatus.OK)
	public void saveBasket(@RequestBody String login) {
		commandeService.saveBasket(login);
	}

}
