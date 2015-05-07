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

	$scope.addItemToBasket = function () {

		BasketService.addItemToBasket($scope.article)
	};
});