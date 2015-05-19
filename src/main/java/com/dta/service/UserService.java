package com.dta.service;

import com.dta.domain.Utilisateur;

public interface UserService {

    public void create(Utilisateur user);
    public void delete(String login);
    public boolean emailExists(String uemail);
    public boolean loginExists(String ulogin);
    public Utilisateur find(String login);
    public void modify(String login, Utilisateur newProfile);
}
