package com.dta.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dta.dao.UserDao;
import com.dta.domain.User;

@Service
@Transactional
public class UserController {

	@Autowired
	private UserDao userDao;

	public User create(User user) {
		return userDao.create(user);
	}

	public User find(int id) {
		return userDao.find(id);
	}

	public List<User> findAll() {
		return userDao.findAll();
	}

	public User update(User user) {
		return userDao.update(user);
	}

	public void delete(int id) {
		userDao.delete(id);
	}
}
