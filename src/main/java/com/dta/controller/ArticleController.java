package com.dta.controller;

import java.util.ArrayList;
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
	public ArticleJson getArticle(@PathVariable("id") int id) {
		Article result = articleService.find(id);
		return new ArticleJson(result);
	}

	@RequestMapping(value="/articles")
	@ResponseBody
	public List<ArticleJson> getArticle() {
		List<Article> articles = articleService.findAll();
		List<ArticleJson> response = new ArrayList<ArticleJson>();
		for(Article art : articles) {
			response.add(new ArticleJson(art));
		}
		return response;
	}
}
