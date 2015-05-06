angular.module("venteEnLigne")
.controller("ListItemController",function($http,ItemService,$location,BasketService){
	var ctrl = this;
	ctrl.items = [];
	function fetchItems(){
		ItemService.getItems()
		.then (function(items){
			for(var i=0; i<items.length; i++) {
				ctrl.items.push({entity: items[i], quantity: 1});
			}
		})
	}
	fetchItems();

	ctrl.showItem = function(item) {
		ItemService.showItem(item)
	}

	ctrl.add = function (item) {
		
		itemSave={
			article_id: item.entity.article_id, 
			name: item.entity.name, 
			price: item.entity.price,
			quantity: item.quantity
		}
		
		BasketService.addItemToBasket(itemSave)
		
	};
})