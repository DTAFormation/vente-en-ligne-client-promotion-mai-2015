angular.module("venteEnLigne")

.controller("ListItemController",function($http, ItemService, $location, BasketService){
	var ctrl = this;
	var items;
	function fetchItems(){
		ItemService.getItems()
		.then (function(items){
			ctrl.items = items;
		})
	}
	fetchItems();

	this.showItem = function(item) {
		ItemService.showItem(item)
	}

	ctrl.add = function (item) {
		
		
		itemSave={//utilisation de itemSave pour supprimer le champ $$hashKey de item
			article_id: item.article_id, 
			name: item.name, 
			price: item.price
		}
		
		BasketService.addItem(itemSave)
		
		
	};

})
