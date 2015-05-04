package com.dta.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.dta.domain.Article;

public class ArticleServiceImpl implements ArticleService{

	private EntityManager em;

	@PersistenceContext(unitName = "entityManagerFactory")
	public void setEm(EntityManager em) {
		this.em = em;
	}
	
	public Article find(int id) {
		return em.find(Article.class, id);
	}

	public List<Article> findAll() {
		Query q = em.createQuery("From Formation");
		
		return (List<Article>) q.getResultList();
	}
	

}
