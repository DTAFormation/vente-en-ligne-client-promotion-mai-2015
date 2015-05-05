angular.module("venteEnLigne").controller("BasketController", ['$scope', function ($scope, BasketService, ItemService) {
	
	$scope.getBasket = function () {
		return JSON.parse(localStorage.getItem('basket'));
	};
	
	$scope.deleteBasket = function () {
		BasketService.deleteBasket();
	}

	$scope.addItem = function (value) {
		BasketService.addItemToBasket(value)
	};
	
	$scope.basket = $scope.getBasket();
	
	$scope.showItem = function(item){
		ItemService.showItem(item)
	};

}]);
