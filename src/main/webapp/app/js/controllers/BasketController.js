angular.module("venteEnLigne").controller("BasketController", function ($scope, BasketService, ItemService) {
	
	$scope.getBasket = function() {
		return BasketService.getBasket();
	};
		
	$scope.showItem = function(item){
		ItemService.showItem(item)
	};


});
