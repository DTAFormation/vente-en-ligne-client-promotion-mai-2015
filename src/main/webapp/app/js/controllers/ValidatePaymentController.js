angular.module("venteEnLigne")
.controller("ValidatePaymentController", function () {
	var validatePaymentControl = this;
	
	validatePaymentControl.basket = JSON.parse(window.localStorage.basket || "[]");
	
	validatePaymentControl.totalPrice = function() {
		var totalPrice = 0;
		validatePaymentControl.basket.forEach(function(d) {
			totalPrice += d.quantity*d.price;
		})
		return totalPrice;
	}
});