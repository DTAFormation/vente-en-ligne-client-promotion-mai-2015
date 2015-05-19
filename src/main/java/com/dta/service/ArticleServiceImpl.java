package com.dta.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dta.domain.Article;

@Service
@Transactional
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

	@Override
	public void updateArticleStock(int id, int stock) {
		System.out.println(em);
		Article article = em.find(Article.class, id);
		article.setStock(stock);
		em.persist(article);
	}
		
	@Override
	public void updateArticleRating(int id, int rating) {
		Article a = em.find(Article.class, id);
		a.setRating((a.getRating() * a.getNbRaters() + rating) / (a.getNbRaters() + 1));
		a.setNbRaters(a.getNbRaters() + 1);
		em.persist(a);
	}
}
