describe('BasketController', function() {
	  beforeEach(function() {
		  module('venteEnLigne');
	  });
	  
	  beforeEach(inject(function($rootScope, $controller){
	        //create an empty scope
	        scope = $rootScope.$new();
	        //declare the controller and inject our empty scope
	        $controller('BasketController', {$scope: scope});
	    }));

	    it('Basket should be equals to null in init', inject(function($rootScope, $controller) {
	      expect(scope.getBasket()).toEqual(null);
	    }));
	    
	    it('Basket should be equals to {"id":1, "name":"truc"}', inject(function($rootScope, $controller) {
		      localStorage.setItem('basket', JSON.stringify({"id":1, "name":"truc"}));
			  expect(scope.getBasket()).toEqual({"id":1, "name":"truc"});
		    }));
	});