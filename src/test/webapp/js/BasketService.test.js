describe('BasketService', function() {
	beforeEach(function() {
		module('venteEnLigne');
		window.localStorage.removeItem("basket");
	});
	
	it('Basket should be equals to []', inject(function(BasketService) {
		expect(BasketService.getBasket()).toEqual([]);
	}));

	it('Basket should be equals to {"articleId":1, "name":"truc"} after an add', inject(function(BasketService) {
		BasketService.addItemToBasket({"articleId":1, "name":"truc"});
		expect(BasketService.getBasket()).toEqual([{"articleId":1, "name":"truc"}]);
	}));
	
	it('Basket should be equals to [] after a delete', inject(function(BasketService) {
		BasketService.deleteBasket();
		expect(BasketService.getBasket()).toEqual([]);
	}));
	
	it('Basket should be equals to [] when a delete is after an add', inject(function(BasketService) {
		BasketService.addItemToBasket({"articleId":1, "name":"truc"});
		BasketService.deleteBasket();
		expect(BasketService.getBasket()).toEqual([]);
	}));

	it('Basket should delete the item', inject(function(BasketService) {
		BasketService.addItemToBasket({"articleId":1, "name":"truc"});
		BasketService.addItemToBasket({"articleId":2, "name":"machin"});
		BasketService.deleteItemFromBasket({"articleId":2, "name":"machin"})
		expect(BasketService.getBasket()).toEqual([{"articleId":1, "name":"truc"}]);
	}));
	
	
	afterEach(function() {
		window.localStorage.removeItem("basket");
	  });
});