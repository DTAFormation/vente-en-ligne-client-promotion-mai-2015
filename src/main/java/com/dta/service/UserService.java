package com.dta.service;

import com.dta.domain.Utilisateur;

public interface UserService {

	public void create(Utilisateur user);
	public void delete(int userId);
	public boolean emailExists(String uemail);
	public boolean loginExists(String ulogin);
	public Utilisateur find(int id);
}
