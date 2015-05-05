angular.module("venteEnLigne").controller("BasketController", ['$scope', function ($scope) {
	
	var webStorage = window['localStorage'];
	
	$scope.getBasket = function () {
		return JSON.parse(webStorage.getItem('basket'));
	};
	
	$scope.deleteBasket = function () {
		webStorage.basket=[];
	}

	$scope.addItem = function (value) {
		var basket = JSON.parse(webStorage.getItem('basket'));
		if (basket == null) {
			basket=[];
		}
		basket = basket.filter(function(v) {
			return v.id!=value.id
		});
		basket.push(value);
		
		webStorage.setItem("basket", JSON.stringify(basket));
		console.log(webStorage.getItem("basket"));

	};
	
	$scope.basket = $scope.getBasket();
	
}]);
