package com.dta.service;

import java.util.List;

import com.dta.domain.Article;

public interface ArticleService {

	public Article find(int id);
	public List<Article> findAll();
}
