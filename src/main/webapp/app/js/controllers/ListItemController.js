angular.module("venteEnLigne")

.controller("ListItemController",function($http,ItemService,$location,$scope,BasketService){
	var ctrl = this;
	
	$scope.items = [];
	$scope.products = []

	$scope.alerts = [];

	$scope.minQuantity = 1;
	$scope.maxQuantity = 10000;

	$scope.currentColumn = 'name';
	$scope.reverse = false;
		
	$scope.rates = [
			{value:1, name:"nullissime"},
			{value:2, name:"très mauvais"},
			{value:3, name:"bof, pas terrible"},
			{value:4, name:"moui, pas trop mal"},
			{value:5, name:"excellent"}
	];

	ItemService.getItems().then(
			function(response) {
				var items = response.data;
				var setProd = new Set();
				for(var i=0; i<items.length; i++) {
					$scope.items.push({name:items[i].name, nameProduct:items[i].nameProduct, disable: false, entity: items[i], quantity: 1});
					setProd.add(items[i].nameProduct);
				}
				$scope.products.push({name:"all products", value:""});
				setProd.forEach(function(value){$scope.products.push({name: value, value: value})});
				console.log($scope.items);
			},
			function(error) {
				addAlert({type: "danger", msg:"Connection error"});
			}
	);

	$scope.showItem = function(item) {
		ItemService.showItem(item)
	};


	$scope.addItemToBasket = function (item) {

		itemSave={
				entity: item.entity, quantity: item.quantity
		}

		var result = BasketService.addItemToBasket(itemSave);
		if(result.error) {
			addAlert({type: "danger", msg: result.error});
		} else {
			addAlert({type: 'success', msg: item.quantity + ' ' + item.entity.name + ' added to basket !'});
		}
	};

	function addAlert(params) {
		$scope.alerts.push(params);
		if($scope.alerts.length > 3) {
			$scope.alerts.shift();
		}
	}

	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};

	$scope.decrementQuantity = function(item) {
		if(item.quantity > $scope.minQuantity) {
			item.quantity--;
		}
	};

	$scope.incrementQuantity = function(item) {
		if(item.quantity < $scope.maxQuantity) {
			item.quantity++;
		}
	};

	$scope.getIcon = function(column) {
		if ($scope.currentColumn == column) {
			return $scope.reverse ? 'glyphicon-chevron-down' : 'glyphicon-chevron-up';
		}
		return 'glyphicon-star';
	}
	
	$scope.getNewRating = function(item, newValue) {		
		if(newValue >= 1) {
			
			var meanRating = (item.entity.rating * item.entity.nbRaters + newValue) / (item.entity.nbRaters + 1);
			meanRating = meanRating.toFixed(2);
			
			item.entity.rating = meanRating;
			item.entity.nbRaters++;
			
			item.disable = true;
			ItemService.updateRating(item.entity.articleId, newValue);
		}		
	}
});
