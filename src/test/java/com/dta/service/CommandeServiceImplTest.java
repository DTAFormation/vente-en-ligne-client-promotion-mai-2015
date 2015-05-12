package com.dta.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;

import com.dta.domain.Commande;
import com.dta.domain.Utilisateur;

@RunWith(MockitoJUnitRunner.class)
public class CommandeServiceImplTest {
	
	CommandeServiceImpl service;
	
	@Mock 
	private EntityManager em;
	
	@Mock
	private Query query;
	
	@Mock
	private Utilisateur user;
	
	
	@Before
	public void setUp() {
		service = new CommandeServiceImpl();
		service.setEm(em);
	}
	
	@Test
	public void getCommandeByLoginTest(){
		
		List<Commande> results;
		List<Commande> returnedList = new ArrayList<Commande>();
		returnedList.add(new Commande());
		
		Mockito.when(em.createNamedQuery("findUserByLogin")).thenReturn(query);
		Mockito.when(query.getSingleResult()).thenReturn(user);
		Mockito.when(user.getCommandes()).thenReturn(returnedList);
		
		results = service.getCommandeByLogin("login");
		
		Assert.assertEquals(1,results.size());
	}
	
	

}
