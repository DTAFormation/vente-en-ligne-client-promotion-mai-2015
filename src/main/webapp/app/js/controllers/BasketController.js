angular.module("venteEnLigne").controller("BasketController", function ($scope, BasketService, ItemService) {
	
	$scope.basket = BasketService.getBasket();
		
	$scope.showItem = function(item){
		ItemService.showItem(item)
	};


});
