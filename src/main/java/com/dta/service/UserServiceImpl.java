package com.dta.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dta.domain.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	private EntityManager em;

	@PersistenceContext(unitName = "entityManagerFactory")
	public void setEm(EntityManager em) {
		this.em = em;
	}

	@Override
	public void create(User user) {
		em.persist(user);
	}

	@Override
	public User find(int id) {
		return em.find(User.class, id);
	}

	@Override
	public List<User> findAll() {
		return null;
	}

	@Override
	public User update(User user) {
		return user;
	}

	@Override
	public void delete(int id) {

	}

}
