angular.module("venteEnLigne")

.controller("ListItemController",function($http,ItemService,$location){
	var ctrl = this;
	var items;
	function fetchItems(){
		ItemService.getItems()
		.then (function(items){
			ctrl.items = items;
		})
	}
	fetchItems();

	ctrl.showItem = function(item) {
		ItemService.showItem(item)
	}

	ctrl.add = function (item) {
		console.log(item)
		itemSave={//utilisation de itemSave pour supprimer le champ $$hashKey de item
			article_id: item.article_id, 
			name: item.name, 
			price: item.price
		}
		ItemService.addItem(itemSave)
	};

})
