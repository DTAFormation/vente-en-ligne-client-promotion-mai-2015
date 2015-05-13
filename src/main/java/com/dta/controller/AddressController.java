package com.dta.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dta.domain.Adresse;
import com.dta.service.CommandeService;

@RestController
@RequestMapping("/address")
public class AddressController {
	@Autowired
	private CommandeService cs;
	
	@RequestMapping(method=RequestMethod.POST)
	@ResponseStatus(value = HttpStatus.OK)
	public void createAddress(@RequestBody Adresse address) {
		cs.setAddress(address);
	}
}
