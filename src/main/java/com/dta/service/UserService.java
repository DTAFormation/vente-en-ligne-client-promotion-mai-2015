package com.dta.service;

import com.dta.domain.User;

public interface UserService {

	public void create(User user);
	public boolean emailExists(String uemail);
	public boolean loginExists(String ulogin);
	
}
