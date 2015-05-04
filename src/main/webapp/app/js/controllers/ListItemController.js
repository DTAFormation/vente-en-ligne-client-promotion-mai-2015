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

this.showItem = function(item) {
	
	$location.path("/article/"+item.article_id)
}
})
