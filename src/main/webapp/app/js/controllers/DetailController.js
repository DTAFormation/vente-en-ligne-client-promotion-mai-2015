angular.module("venteEnLigne")

.controller("DetailController",function(ItemService, BasketService, $routeParams){

	var ctrl = this;
	var article;

	
	ItemService.getItem($routeParams.id)
	.then(function(result){

		ctrl.article = result;
	},
	function(error){
		alert("probleme recup")
	})
	
	ctrl.add = function () {
		ItemService.getItem($routeParams.id)//appel de getItem pour conaitre l'article qu'on ajoute (ctrl.article)
		.then(function(result){

			ctrl.article = result;
		},
		function(error){
			alert("probleme recup")
		})
		
		BasketService.addItem(ctrl.article)
	};
});