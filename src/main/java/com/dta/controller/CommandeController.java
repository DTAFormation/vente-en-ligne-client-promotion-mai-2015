package com.dta.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dta.service.CommandeService;

@RestController
@RequestMapping("/commande")
public class CommandeController {
	
	@Autowired
	private CommandeService commandeService;

}
