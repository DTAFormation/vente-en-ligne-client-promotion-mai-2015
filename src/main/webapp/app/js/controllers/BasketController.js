angular.module("venteEnLigne").controller("BasketController", function ($scope, BasketService, ItemService) {
	
	
	$scope.alerts = [];
		
	$scope.showItem = function(item){
		ItemService.showItem(item)
	};

	function fetchBasket (){
		$scope.basket = BasketService.getBasket();
	}

	fetchBasket();

	$scope.deleteItemFromBasket = function(item){
		itemToDelete = {entity : item.entity, quantity : item.quantity}
		var result = BasketService.deleteItemFromBasket(itemToDelete);
		addAlert({type:"success", msg: item.entity.name + ' was successfully deleted from basket !'})

		fetchBasket();

	};

	$scope.updateItem = function (item) {

		itemToUpdate={
			entity: item.entity, quantity: item.quantity
		}
		$scope.deleteItemFromBasket(item);
		var result = BasketService.addItemToBasket(itemToUpdate);
		if(result.error) {
			addAlert({type: "danger", msg: result.error});
		} else {
			addAlert({type: 'success', msg: ' Quantity of ' + item.entity.name + ' successfully updated !'});
		}
		fetchBasket();
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


});
