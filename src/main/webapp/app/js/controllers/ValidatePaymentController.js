angular.module("venteEnLigne")
.controller("ValidatePaymentController", function ($scope, $location, ConnectService, BasketService,ProfilService) {
	
	$scope.basket = BasketService.getBasket();
	
	$scope.totalPrice = function() {
		var totalPrice = 0;
		$scope.basket.forEach(function(d) {
			totalPrice += d.quantity*d.entity.price;
		})
		return totalPrice;
	}
	
	
	
	$scope.validate = function() {
		if(!ConnectService.isConnected())
			$location.path("/connect");
		else{
			$scope.basket.forEach(function(d){
				BasketService.saveBasketCommand(d);
			})
			ProfilService.getProfil(window.sessionStorage.getItem("connected"));
			$location.path("/address");
		}
			
	}
});