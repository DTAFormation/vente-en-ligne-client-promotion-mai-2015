angular.module("venteEnLigne")
.controller("DetailController",function(ItemService,$routeParams,BasketService){

	var ctrl = this;

	ItemService.getItem($routeParams.id)
	.then(function(result){
		ctrl.article={entity: result, quantity: 1};
	},
	function(error){
		alert("probleme recup")
	})

	ctrl.add = function (article) {
		
		ItemService.getItem($routeParams.id)//appel de getItem pour conaitre l'article qu'on est en train d ajouter (ctrl.article)
		.then(function(result){
			ctrl.article = result;
		},
		function(error){
			alert("probleme recup")
		})

		itemSave={
			article_id: ctrl.article.entity.article_id, 
			name: ctrl.article.entity.name, 
			price: ctrl.article.entity.price,
			quantity: article.quantity
		}
		BasketService.addItemToBasket(itemSave)
	};
});