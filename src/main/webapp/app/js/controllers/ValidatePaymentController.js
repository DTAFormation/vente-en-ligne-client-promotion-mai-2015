angular.module("venteEnLigne")
.controller("ValidatePaymentController", function ($scope, $location, ConnectService) {
	var validatePaymentControl = this;
	
	validatePaymentControl.basket = JSON.parse(window.localStorage.basket || "[]");
	
	validatePaymentControl.totalPrice = function() {
		var totalPrice = 0;
		validatePaymentControl.basket.forEach(function(d) {
			totalPrice += d.quantity*d.price;
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