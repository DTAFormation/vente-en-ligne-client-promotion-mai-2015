angular.module("venteEnLigne")

.controller("DetailController",function(ItemService, BasketService,$scope, $routeParams){

	var ctrl = this;
	$scope.article;


	ItemService.getItem($routeParams.id)
	.then(function(result){

	$scope.article = result;
	},
	function(error){
		alert("probleme recup")
	})

	$scope.addItemToBasket = function () {
		
		itemSave={
			article_id: $scope.article.article_id, 
			name: $scope.article.name, 
			price: $scope.article.price,
			quantity: 1
		}
		BasketService.addItemToBasket(itemSave)
	};
});