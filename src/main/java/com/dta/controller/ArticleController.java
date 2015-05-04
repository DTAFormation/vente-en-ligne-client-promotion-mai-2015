package com.dta.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/article")
public class ArticleController {

	@RequestMapping(method = RequestMethod.GET)
	public String getArticle() {
		return "{ \"id\" : \"1\" ,"
				+ " \"name\" : \"ball\" ,"
				+ " \"price\" : \"15\" }";
	}
	
}
