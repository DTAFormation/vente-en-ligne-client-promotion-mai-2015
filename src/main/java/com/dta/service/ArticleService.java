package com.dta.service;

import java.util.List;

import javax.persistence.EntityManager;

import com.dta.domain.Article;

public interface ArticleService {

    public Article find(int id);
    public List<Article> findAll();
    public void updateArticleStock(int id, int stock);
    public void updateArticleRating(int id, int rating);

    public void setEm(EntityManager em);

}
