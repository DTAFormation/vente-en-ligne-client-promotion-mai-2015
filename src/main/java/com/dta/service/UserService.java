package com.dta.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dta.domain.User;

@Service
@Transactional
public class UserService {

	private EntityManager em;

	@PersistenceContext(unitName = "entityManagerFactory")
	public void setEm(EntityManager em) {
		this.em = em;
	}

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
