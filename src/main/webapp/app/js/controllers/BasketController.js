angular.module("venteEnLigne").controller("BasketController", function (ItemService) {

	var webStorage = window['localStorage'];

	this.getBasket = function () {
		return JSON.parse(webStorage.getItem('basket'));
	};

	this.addItem = function (value) {
		ItemService.addItem(value)
	};
	
	this.basket = this.getBasket();
	
	this.showItem = function(item){
		ItemService.showItem(item)
	};

});
