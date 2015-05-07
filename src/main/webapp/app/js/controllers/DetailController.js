angular.module("venteEnLigne")

.controller("DetailController",function(ItemService, BasketService,$scope, $routeParams){

	$scope.article = {};

	$scope.alerts = [];

	$scope.minQuantity = 1;
	$scope.maxQuantity = 10000;

	ItemService.getItem($routeParams.id)
	.then(function(result){

		$scope.article = {entity: result.data, quantity: 1};

	},
	function(error){
		console.log(error);
	});

	$scope.addItemToBasket = function () {
		var itemSave={
			entity: $scope.article.entity, quantity: $scope.article.quantity
		}
		var result = BasketService.addItemToBasket(itemSave);
		if(result.error) {
			addAlert({type: "danger", msg: result.error});
		} else {
			addAlert({type: 'success', msg: itemSave.quantity + ' ' + itemSave.entity.name + ' added to basket !'});
		}
	};

	function addAlert(params) {
		$scope.alerts.push(params);
		if($scope.alerts.length > 3) {
			$scope.alerts.shift();
		}
	}

	$scope.decrementQuantity = function() {
		if($scope.article.quantity > $scope.minQuantity) {
			$scope.article.quantity--;
		}
	};

	$scope.incrementQuantity = function() {
		if($scope.article.quantity < $scope.maxQuantity) {
			$scope.article.quantity++;
		}
	};

	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};

});