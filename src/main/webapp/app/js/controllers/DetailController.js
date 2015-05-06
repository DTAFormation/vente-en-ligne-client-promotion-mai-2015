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
			articleId: $scope.article.articleId, 
			name: $scope.article.name, 
			price: $scope.article.price,
			quantity: 1
		}
		BasketService.addItemToBasket(itemSave)
	};
});