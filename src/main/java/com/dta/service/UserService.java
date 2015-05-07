package com.dta.service;

import com.dta.domain.Utilisateur;

public interface UserService {

	public void create(Utilisateur user);
	public boolean emailExists(String uemail);
	public boolean loginExists(String ulogin);
	
}
