package com.dta.dao;

import java.util.List;

import com.dta.domain.User;

public interface UserDao {

	public User create(User user);
	public User find(int id);
	public List<User> findAll();
	public User update(User user);
	public void delete(int id);
	
}
