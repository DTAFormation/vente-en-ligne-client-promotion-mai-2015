angular.module("venteEnLigne")

.controller("ListItemController",function($http,ItemService,$location,$scope,BasketService){
	var ctrl = this;
	$scope.items = [];
	function fetchItems(){
		ItemService.getItems()
		.then (function(items){
			for(var i=0; i<items.length; i++) {
				$scope.items.push({entity: items[i], quantity: 1});
			}
		})
	}
	fetchItems();

	$scope.showItem = function(item) {
		ItemService.showItem(item)
	}


	$scope.addItemToBasket = function (item) {
		
		itemSave={
			article_id: item.entity.article_id, 
			name: item.entity.name, 
			price: item.entity.price,
			quantity: item.quantity
		}
		
		BasketService.addItemToBasket(itemSave)
		
	};
})
