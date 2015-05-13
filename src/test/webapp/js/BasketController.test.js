describe('BasketController', function(){
	beforeEach(function(){
		module('venteEnLigne');
		window.localStorage.removeItem("basket");
	});

	beforeEach(inject(function($rootScope, $controller, BasketService){
		//create an empty scope
		scope = $rootScope.$new();
		//declare the controller and inject our empty scope
		$controller('BasketController', {$scope: scope});
	}));

	it('Basket should be equal to []', inject (function(BasketService){
		expect(BasketService.getBasket()).toEqual([]);
	}));
	/*
	it('Basket should delete the item', inject(function(BasketService) {
		BasketService.addItemToBasket({"entity":{"articleId":1, "name":"truc"}, "quantity":2});
		BasketService.addItemToBasket({"entity":{"articleId":2, "name":"machin"}, "quantity":1});
		BasketService.deleteItemFromBasket({"entity":{"articleId":2, "name":"machin"}, "quantity":1})
		expect(BasketService.getBasket()).toEqual([{"entity":{"articleId":1, "name":"truc"}, "quantity":2}]);
	}));


	it('Basket should delete the item', inject(function(BasketService) {
		BasketService.addItemToBasket({"entity":{"articleId":1, "name":"truc"}, "quantity":2});
		BasketService.addItemToBasket({"entity":{"articleId":2, "name":"machin"}, "quantity":1});
		BasketService.addItemToBasket({"entity":{"articleId":3, "name":"bidule"}, "quantity":5});
		BasketService.deleteItemFromBasket({"entity":{"articleId":2, "name":"machin"}, "quantity":1})
		expect(BasketService.getBasket()).toEqual([{"entity":{"articleId":1, "name":"truc"}, "quantity":2}, {"entity":{"articleId":3, "name":"bidule"}, "quantity":5}]);
	}));
	*/
	it('Basket should update the quantity of an item already existing', inject(function(BasketService) {
		BasketService.addItemToBasket({"entity":{"articleId":1, "name":"truc", "stock":20}, "quantity":2});
		BasketService.addItemToBasket({"entity":{"articleId":2, "name":"machin", "stock":10}, "quantity":1});
		BasketService.addItemToBasket({"entity":{"articleId":3, "name":"bidule", "stock":5}, "quantity":5});
		BasketService.updateItemInBasket({"entity":{"articleId":2, "name":"machin", "stock":10}, "quantity":8})
		expect(BasketService.getBasket()).toEqual([{"entity":{"articleId":1, "name":"truc", "stock":20}, "quantity":2}, {"entity":{"articleId":3, "name":"bidule", "stock":5}, "quantity":5}, {"entity":{"articleId":2, "name":"machin", "stock":10}, "quantity":8}]);
	}));


	afterEach(function() {
		window.localStorage.removeItem("basket");
	  });
});