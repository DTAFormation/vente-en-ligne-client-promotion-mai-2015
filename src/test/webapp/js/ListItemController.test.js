describe('ListItemController', function() {
	  beforeEach(function() {
		  module('venteEnLigne');
	  });
	  
	  beforeEach(inject(function($rootScope, $controller){
	        //create an empty scope
	        scope = $rootScope.$new();
	        //declare the controller and inject our empty scope
	        $controller('ListItemController', {$scope: scope});
	    }));
	    
	   it('should change path to article/item.id', inject(function($rootScope, $controller,ItemService,$location) {
		      scope.showItem({"articleId":"1","name":"toto","price":"15"});
		      expect($location.path()).toEqual("/article/1");
	   }));
//	   
//	   it('Basket should be equals to {"id":1, "name":"truc"}', inject(function($rootScope, $controller,BasketService) {
//		      scope.addItemToBasket({"article_id":1, "name":"truc","price":"15"})
//			  expect(localStorage.getItem('basket')).toEqual({"article_id":1, "name":"truc","price":"15","quantity":1});
//		    }));
	   
	   
	});