package com.dta.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Service;

import com.dta.domain.Article;

@Service
public class ArticleServiceImpl implements ArticleService{

	private EntityManager em;

	@PersistenceContext(unitName = "entityManagerFactory")
	public void setEm(EntityManager em) {
		this.em = em;
	}
	
	@Override
	public Article find(int id) {
		return em.find(Article.class, id);
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Article> findAll() {
		Query q = em.createQuery("From Article");
		return (List<Article>) q.getResultList();
	}
	

}
