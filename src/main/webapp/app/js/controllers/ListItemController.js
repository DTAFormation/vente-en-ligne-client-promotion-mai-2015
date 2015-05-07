angular.module("venteEnLigne")

.controller("ListItemController",function($http,ItemService,$location,$scope,BasketService){
	var ctrl = this;
	$scope.items = [];
	
	$scope.alerts = [];

	$scope.minQuantity = 1;
	$scope.maxQuantity = 10000;

	ItemService.getItems()
	.then (function(items){
		for(var i=0; i<items.length; i++) {
			$scope.items.push({entity: items[i], quantity: 1});
		}
	})

	$scope.showItem = function(item) {
		ItemService.showItem(item)
	};


	$scope.addItemToBasket = function (item) {

		itemSave={
			entity: item.entity, quantity: item.quantity
		}

		BasketService.addItemToBasket(itemSave)
		$scope.alerts.push({type: 'success', msg: item.quantity + ' ' + item.entity.name + ' added to basket !'});
		if($scope.alerts.length > 3)
			$scope.alerts.shift();
	};
	
	$scope.closeAlert = function(index) {
	    $scope.alerts.splice(index, 1);
	  };

	$scope.decrementQuantity = function(item) {
		if(item.quantity > $scope.minQuantity) {
			item.quantity--;
		}
	};

	$scope.incrementQuantity = function(item) {
		if(item.quantity < $scope.maxQuantity) {
			item.quantity++;
		}
	};

});
