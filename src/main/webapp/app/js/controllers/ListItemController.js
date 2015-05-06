angular.module("venteEnLigne")

.controller("ListItemController",function($http, ItemService, $location, $scope,BasketService){
	var ctrl = this;

	ItemService.getItems()
	.then (function(items){
		$scope.items = items;
	})

	$scope.showItem = function(item) {
		ItemService.showItem(item)
	}

	$scope.addItemToBasket = function (item) {
		itemSave={//utilisation de itemSave pour supprimer le champ $$hashKey de item
			article_id: item.article_id, 
			name: item.name, 
			price: item.price,
			quantity: 1
		}
		BasketService.addItemToBasket(itemSave)
	};

})
