describe('BasketService', function() {
	beforeEach(function() {
		module('venteEnLigne');
		window.localStorage.removeItem("basket");
	});
	
	it('Basket should be equals to []', inject(function(BasketService) {
		expect(BasketService.getBasket()).toEqual([]);
	}));

	it('Basket should be equals to {"entity":{"articleId":1, "name":"truc"}, "quantity":2, "stock":20} after an add', inject(function(BasketService) {
		BasketService.addItemToBasket({"entity":{"articleId":1, "name":"truc", "stock":20}, "quantity":2});
		expect(BasketService.getBasket()).toEqual([{"entity":{"articleId":1, "name":"truc", "stock":20}, "quantity":2}]);
	}));
	
	it('Basket should be equals to [] after a delete', inject(function(BasketService) {
		BasketService.deleteBasket();
		expect(BasketService.getBasket()).toEqual([]);
	}));
	
	it('Basket should be equals to [] when a delete is after an add', inject(function(BasketService) {
		BasketService.addItemToBasket({"entity":{"articleId":1, "name":"truc"}, "quantity":2});
		BasketService.deleteBasket();
		expect(BasketService.getBasket()).toEqual([]);
	}));
	/*
	it('Basket should delete the item', inject(function(BasketService) {
		BasketService.addItemToBasket({"entity":{"articleId":1, "name":"truc"}, "quantity":2});
		BasketService.addItemToBasket({"entity":{"articleId":2, "name":"machin"}, "quantity":1});
		BasketService.deleteItemFromBasket({"entity":{"articleId":2, "name":"machin"}, "quantity":1})
		expect(BasketService.getBasket()).toEqual([{"entity":{"articleId":1, "name":"truc"}, "quantity":2}]);
	}));
	*/
	it('Basket should update the quantity of an item already existing', inject(function(BasketService){
		BasketService.addItemToBasket({"entity":{"articleId":1, "name":"truc", "stock":20}, "quantity":4});
		BasketService.updateItemInBasket({"entity":{"articleId":1, "name":"truc", "stock":20}, "quantity":2});
		expect (BasketService.getBasket()).toEqual([{"entity":{"articleId":1, "name":"truc", "stock":20}, "quantity":2}])
	}));

	it('Adding multiple times the same item in the list view should increase its quantity', inject(function(BasketService){
		BasketService.addItemToBasket({"entity":{"articleId":1, "name":"truc", "stock":20}, "quantity":4});
		BasketService.addItemToBasket({"entity":{"articleId":1, "name":"truc", "stock":20}, "quantity":5});
		BasketService.addItemToBasket({"entity":{"articleId":1, "name":"truc", "stock":20}, "quantity":2});
		expect (BasketService.getBasket()).toEqual([{"entity":{"articleId":1, "name":"truc", "stock":20}, "quantity":11}])
	}));
	
	it('Basket should  update if the quantity asked is < stock', inject(function(BasketService){
		BasketService.addItemToBasket({"entity":{"articleId":1, "name":"truc", "stock":10}, "quantity":8});
		expect (BasketService.getBasket()).toEqual([{"entity":{"articleId":1, "name":"truc", "stock":10}, "quantity":8}])
	}));

	it('Basket should not update if the quantity asked is > stock', inject(function(BasketService){
		BasketService.addItemToBasket({"entity":{"articleId":1, "name":"truc", "stock":10}, "quantity":15});
		expect (BasketService.getBasket()).toEqual([])
	}));

	it('Basket should  update if the quantity asked + the quantity already in basket is < stock', inject(function(BasketService){
		BasketService.addItemToBasket({"entity":{"articleId":1, "name":"truc", "stock":10}, "quantity":1});
		BasketService.addItemToBasket({"entity":{"articleId":1, "name":"truc", "stock":10}, "quantity":8});
		expect (BasketService.getBasket()).toEqual([{"entity":{"articleId":1, "name":"truc", "stock":10}, "quantity":9}])
	}));

	
	it('Basket should not update if the quantity asked + the quantity already in basket is > stock', inject(function(BasketService){
		BasketService.addItemToBasket({"entity":{"articleId":1, "name":"truc", "stock":10}, "quantity":1});
		BasketService.addItemToBasket({"entity":{"articleId":1, "name":"truc", "stock":10}, "quantity":15});
		expect (BasketService.getBasket()).toEqual([{"entity":{"articleId":1, "name":"truc", "stock":10}, "quantity":1}])
	}));

	it('Basket should update if the quantity asked to be updated in basket is < stock', inject(function(BasketService){
		BasketService.addItemToBasket({"entity":{"articleId":1, "name":"truc", "stock":10}, "quantity":1});
		BasketService.updateItemInBasket({"entity":{"articleId":1, "name":"truc", "stock":10}, "quantity":7});
		expect (BasketService.getBasket()).toEqual([{"entity":{"articleId":1, "name":"truc", "stock":10}, "quantity":7}])
	}));

	it('Basket should not update if the quantity asked to be updated in basket is > stock', inject(function(BasketService){
		BasketService.addItemToBasket({"entity":{"articleId":1, "name":"truc", "stock":10}, "quantity":1});
		BasketService.updateItemInBasket({"entity":{"articleId":1, "name":"truc", "stock":10}, "quantity":15});
		expect (BasketService.getBasket()).toEqual([{"entity":{"articleId":1, "name":"truc", "stock":10}, "quantity":1}])
	}));


	
	afterEach(function() {
		window.localStorage.removeItem("basket");
	  });
});