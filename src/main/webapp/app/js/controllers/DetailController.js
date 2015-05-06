angular.module("venteEnLigne")

.controller("DetailController",function(ItemService, BasketService,$scope, $routeParams){

	var ctrl = this;
	$scope.article;


	ItemService.getItem($routeParams.id)
	.then(function(result){

	$scope.article = {entity: result, quantity: 1};

	},
	function(error){
		alert("probleme recup")
	})

	$scope.add = function (article) {
		
		ItemService.getItem($routeParams.id)//appel de getItem pour conaitre l'article qu'on est en train d ajouter (ctrl.article)
		.then(function(result){
			$scope.article = result;
		},
		function(error){
			alert("probleme recup")
		})

		itemSave={
			article_id: $scope.article.entity.article_id, 
			name: $scope.article.entity.name, 
			price: $scope.article.entity.price,
			quantity: $scope.article.quantity
		}
		BasketService.addItemToBasket(itemSave)
	};
});