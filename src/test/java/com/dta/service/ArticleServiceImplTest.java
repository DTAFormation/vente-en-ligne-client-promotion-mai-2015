package com.dta.service;

import static org.junit.Assert.assertEquals; // évite les Assert.assertEquals
import static org.mockito.Mockito.when; // évite les Mockito.when ou Mockito.verify

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dta.domain.Article;

@RunWith(MockitoJUnitRunner.class)
public class ArticleServiceImplTest {

    private static final Logger LOG = LoggerFactory.getLogger(ArticleServiceImpl.class);

    @Mock 
    private EntityManager em;
    
    @Mock 
    private Query queryFindAll;
    
    // Classe à tester
    private ArticleServiceImpl service;
    
    @Before
    public void setUp() {
        service = new ArticleServiceImpl();
        service.setEm(em);
    }
    
    @Test
    public void FindAllTest() {
        
        LOG.info("On veut récupérer toute la liste d'articles en base");
        
        // Simule la présence d'un user en base
        List<Article> articlesEnBase = new ArrayList<>();
        articlesEnBase.add(new Article());
        
        // Programmer le comportement du mock
        when(em.createQuery("From Article")).thenReturn(queryFindAll);
        when(queryFindAll.getResultList()).thenReturn(articlesEnBase);

        LOG.info("Lorsque service.userExists(email)");
        List<Article> articlesResult = new ArrayList<>();
        articlesResult = service.findAll();

        LOG.info("Alors le service renvoie une liste d'article");
        
        assertEquals("findAll devrait retourner la liste d'article en base", articlesResult, articlesEnBase);
    }

    @Test
    public void findTestExists() {
        
        LOG.info("Etant donné un id d'article en base");
       
        Article articleEnBase = new Article();
     
        // Programmer le comportement du mock
        when(em.find(Article.class,1)).thenReturn(articleEnBase);
     
        LOG.info("Lorsque service.find(id)");
        Article articleResult;
        articleResult = service.find(1);

        LOG.info("Alors le service renvoie un article ");
        
        assertEquals("find devrait retourner un article si l'id est en base", articleResult, articleEnBase);
    }

    @Test
    public void findTestNotExists() {
        
        LOG.info("Etant donné un id d'article qui n'est pas en base");
       
        
        // Programmer le comportement du mock
        when(em.find(Article.class,1)).thenReturn(null);
     
        LOG.info("Lorsque service.find(id)");
        Article articleResult;
        articleResult = service.find(1);

        LOG.info("Alors le service renvoie null");
        
        assertEquals("find devrait retourner un article si l'id n'est pas en base", articleResult, null);
    }

   
}
