angular.module("venteEnLigne")
.controller("ValidatePaymentController", function ($scope, $location, ConnectService, BasketService) {
	var validatePaymentControl = this;
	
	validatePaymentControl.basket = BasketService.getBasket();
	
	validatePaymentControl.totalPrice = function() {
		var totalPrice = 0;
		validatePaymentControl.basket.forEach(function(d) {
			totalPrice += d.quantity*d.entity.price;
		})
		return totalPrice;
	}
	
	$scope.validate = function() {
		if(!ConnectService.isConnected())
			$location.path("/connect");
		else
			$location.path("/payment");
	}
});