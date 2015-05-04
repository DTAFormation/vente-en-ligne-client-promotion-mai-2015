package com.dta.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate4.HibernateTemplate;
import org.springframework.stereotype.Component;

import com.dta.domain.User;

@Component
public class UserDaoImpl implements UserDao {

	private HibernateTemplate hibernateTemplate;

	@Autowired
	public void setSessionFactory(SessionFactory sessionFactory) {
		hibernateTemplate = new HibernateTemplate(sessionFactory);
	}

	@Override
	public User create(User user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User find(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User update(User user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub

	}

}
