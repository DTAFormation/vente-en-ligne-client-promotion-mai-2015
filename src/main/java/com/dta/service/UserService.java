package com.dta.service;

import com.dta.domain.User;

public interface UserService {

	public void create(User user);
	public boolean userExists(String uemail);
	
}
