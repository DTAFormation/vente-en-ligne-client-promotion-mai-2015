angular.module("venteEnLigne").controller("BasketController", ['$scope', function ($scope, ItemService) {
	
	$scope.getBasket = function () {
		return JSON.parse(localStorage.getItem('basket'));
	};
	
	$scope.deleteBasket = function () {
		localStorage.basket="";
		//ItemService.deleteBasket();
	}

	$scope.addItem = function (value) {
		ItemService.addItem(value)
	};
	
	$scope.basket = $scope.getBasket();
	
	$scope.showItem = function(item){
		ItemService.showItem(item)
	};

}]);
