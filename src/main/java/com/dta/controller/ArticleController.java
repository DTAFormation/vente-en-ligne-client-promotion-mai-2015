package com.dta.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.dta.domain.Article;
import com.dta.service.ArticleService;


@RestController
@RequestMapping
public class ArticleController {

	@Autowired
	private ArticleService articleService;
	
	@RequestMapping(value="/article/{id}")
	@ResponseBody
	public Article getArticle(@PathVariable("id") int id) {

		return articleService.find(id);
	}

	@RequestMapping(value="/articles")
	@ResponseBody
	public List<Article> getArticle() {
		return articleService.findAll();
	}
}
