angular.module("venteEnLigne").controller("BasketController", function ($scope, BasketService, ItemService) {
	
	$scope.getBasket = function () {
		return JSON.parse(localStorage.getItem('basket'));
	};
	
	$scope.deleteBasket = function () {
		BasketService.deleteBasket();
	}

	$scope.addItemToBasket = function (value) {
		BasketService.addItemToBasket(value)
	};
	
	$scope.basket = $scope.getBasket();
	
	$scope.showItem = function(item){
		ItemService.showItem(item)
	};

});
