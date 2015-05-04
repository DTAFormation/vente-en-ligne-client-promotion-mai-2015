package com.dta.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dta.domain.User;

@Service
@Transactional
public class UserService {

	public User create(User user) {
		return null;
	}

	public User find(int id) {
		return null;
	}

	public List<User> findAll() {
		return null;
	}

	public User update(User user) {
		return user;
	}

	public void delete(int id) {

	}
}
