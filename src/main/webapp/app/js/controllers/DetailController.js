angular.module("venteEnLigne")

.controller("DetailController",function(ItemService,$routeParams){

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


		itemSave={
			article_id: ctrl.article.article_id, 
			name: ctrl.article.name, 
			price: ctrl.article.price,
			quantity: 1
		}
		console.log("itemSave")
		console.log(itemSave)
		ItemService.addItem(itemSave)
	};
});