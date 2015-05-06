angular.module("venteEnLigne")

.controller("ListItemController",function($http,ItemService,$location,$scope,BasketService){
	var ctrl = this;
	$scope.items = [];

	ItemService.getItems()
	.then (function(items){
		for(var i=0; i<items.length; i++) {
			$scope.items.push({entity: items[i], quantity: 1});
		}
	})

	$scope.showItem = function(item) {
		ItemService.showItem(item)
	}


	$scope.addItemToBasket = function (item) {

		BasketService.addItemToBasket(item)

	};
})
