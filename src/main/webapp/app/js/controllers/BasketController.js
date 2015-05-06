angular.module("venteEnLigne").controller("BasketController", function ($scope, BasketService, ItemService) {
	
	$scope.getBasket = function () {
		return BasketService.getBasket();
	};
	
	$scope.deleteBasket = function () {
		BasketService.deleteBasket();
	}

	$scope.addItemToBasket = function (item) {
		BasketService.addItemToBasket(item)
	};
	
	$scope.basket = $scope.getBasket();
	
	$scope.showItem = function(item){
		ItemService.showItem(item)
	};
	
	$scope.deleteItemFromBasket = function(item){
		ItemService.deleteItemFromBasket(item)
	};

});
