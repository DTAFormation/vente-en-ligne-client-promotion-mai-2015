package com.dta.selenium;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;

import junit.framework.Assert;

import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class SeleniumBasketTest {
	
	/* Pour chrome et Internet Explorer*/
	
	
//    @BeforeClass
//    public static void initEnvironment() {
//
//        
//        File iePath = new File("C:/tools/selenium-2.45.0/IEDriverServer.exe");
//        System.setProperty("webdriver.ie.driver", iePath.getAbsolutePath());
//        File chromePath = new File("C:/tools/selenium-2.45.0/chromedriver.exe");
//        System.setProperty("webdriver.chrome.driver", chromePath.getAbsolutePath());
//    }
//    
//    @Test
//    public void testIE()
//            throws MalformedURLException, IOException {
//
//        WebDriver driver = null;
//    	try {
//    		driver = new InternetExplorerDriver();
//    		driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
//    		testAddBasket(driver);
//    	} finally {
//            if (driver != null) {
//                driver.quit();
//            }
//        }
//    }
//
//    @Test
//    public void testChrome()
//            throws MalformedURLException, IOException {
//        WebDriver driver = null;
//    	try {
//    		driver = new ChromeDriver();
//    		driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
//    		testAddBasket(driver);
//    	} finally {
//            if (driver != null) {
//                driver.quit();
//            }
//        }
//    }
    
    @Test
    public void testFirefox()
            throws MalformedURLException, IOException {
    	WebDriver driver = null;
    	try {
    		driver = new FirefoxDriver();
    		driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
    		testAddBasket(driver);
    	} finally {
            if (driver != null) {
                driver.quit();
            }
        }
    }
    
    public void testAddBasket(WebDriver driver) throws MalformedURLException{
            driver.get("http://localhost:8080/VentesEnLigneClient/#/" + "showItems.html");
            System.out.println("http://localhost:8080/VentesEnLigneClient/#/" + "showItems.html");
            WebElement plus = driver.findElement(By.xpath("(//button[@name='plus'])[3]"));
            plus.click();
            plus.click();
            WebElement number = driver.findElement(By.xpath("(//input[@name='number'])[3]"));
            Assert.assertEquals(3, Integer.parseInt(number.getAttribute("value")));       
    }
   
}
