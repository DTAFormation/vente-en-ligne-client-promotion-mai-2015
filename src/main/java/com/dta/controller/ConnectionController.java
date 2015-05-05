package com.dta.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dta.domain.ConnectionResult;
import com.dta.domain.Logins;
import com.dta.domain.User;
import com.dta.service.UserService;

@RestController
@RequestMapping("/connect")
public class ConnectionController {

	@Autowired
	private UserService userService;
	
	@RequestMapping(method = RequestMethod.POST)
	public ConnectionResult connectUser(@RequestBody Logins logins) {
		User expectedUser = userService.find(1);
		if(!logins.getUsername().equals(expectedUser.getLogin())) {
			return new ConnectionResult(false);
		}
		if(!logins.getPassword().equals(expectedUser.getPassword())) {
			return new ConnectionResult(false);
		}
		return new ConnectionResult(true);
	}
}