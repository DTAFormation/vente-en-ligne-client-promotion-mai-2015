package com.dta.service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dta.domain.User;

@Service
public class UserServiceImpl implements UserService {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

	@PersistenceContext(unitName = "entityManagerFactory")
	private EntityManager em;
	
	@Override
	@Transactional
	public void create(User user) {
		LOGGER.info("Create user {}",user);
		em.persist(user);
	}

}
