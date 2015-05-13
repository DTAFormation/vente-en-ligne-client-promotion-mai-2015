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
		BasketService.addItemToBasket({"name":"truc", "nameProduct":"truc", "entity":{"articleId":1, "name":"truc"}, "quantity":2});
		BasketService.addItemToBasket({"name":"machin", "nameProduct":"bidule", "entity":{"articleId":2, "name":"machin"}, "quantity":1});
		BasketService.deleteItemFromBasket({"name":"machin", "nameProduct":"bidule", "entity":{"articleId":2, "name":"machin"}, "quantity":1})
		expect(BasketService.getBasket()).toEqual([{"name":"truc", "nameProduct":"truc", "entity":{"articleId":1, "name":"truc"}, "quantity":2}]);
	}));


	it('Basket should delete the item', inject(function(BasketService) {
		BasketService.addItemToBasket({"name":"truc", "nameProduct":"truc", "entity":{"articleId":1, "name":"truc"}, "quantity":2});
		BasketService.addItemToBasket({"name":"machin", "nameProduct":"truc", "entity":{"articleId":2, "name":"machin"}, "quantity":1});
		BasketService.addItemToBasket({"name":"bidule", "nameProduct":"truc", "entity":{"articleId":3, "name":"bidule"}, "quantity":5});
		BasketService.deleteItemFromBasket({"name":"machin", "nameProduct":"bidule", "entity":{"articleId":2, "name":"machin"}, "quantity":1})
		expect(BasketService.getBasket()).toEqual([{"name":"truc", "nameProduct":"truc", "entity":{"articleId":1, "name":"truc"}, "quantity":2}, 
		                                           {"name":"bidule", "nameProduct":"truc", "entity":{"articleId":3, "name":"bidule"}, "quantity":5}]);
	}));
	*/
	it('Basket should update the quantity of an item already existing', inject(function(BasketService) {

		BasketService.addItemToBasket({"name":"truc", "nameProduct":"truc", "entity":{"articleId":1, "name":"truc"}, "quantity":2});
		BasketService.addItemToBasket({"name":"machin", "nameProduct":"truc", "entity":{"articleId":2, "name":"machin"}, "quantity":1});
		BasketService.addItemToBasket({"name":"bidule", "nameProduct":"truc", "entity":{"articleId":3, "name":"bidule"}, "quantity":5});
		BasketService.updateItemInBasket({"name":"truc", "nameProduct":"truc", "entity":{"articleId":2, "name":"machin"}, "quantity":8})
		expect(BasketService.getBasket()).toEqual([{"name":"truc", "nameProduct":"truc", "entity":{"articleId":1, "name":"truc"}, "quantity":2},
		                                           {"name":"machin", "nameProduct":"truc", "entity":{"articleId":2, "name":"machin"}, "quantity":8},
		                                           {"name":"bidule", "nameProduct":"truc", "entity":{"articleId":3, "name":"bidule"}, "quantity":5}])
	}));


	afterEach(function() {
		window.localStorage.removeItem("basket");
	  });
});