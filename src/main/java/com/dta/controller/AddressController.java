package com.dta.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dta.domain.Adresse;

@RestController
@RequestMapping("/address")
public class AddressController {
	@RequestMapping(method=RequestMethod.POST)
	@ResponseStatus(value = HttpStatus.OK)
	public void createUser(@RequestBody Adresse address) {
		
		System.out.println("ICI ADRESSE -STOP- BIEN RECU -STOP- CONTINUE COMME CA -STOP-");
		System.out.println("adresse : ");
		System.out.println(address.toString());
	}
}
