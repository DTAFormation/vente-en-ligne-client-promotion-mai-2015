angular.module("venteEnLigne", ["ngRoute", "ui.bootstrap"])
.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "app/views/showItems.html",
		controller: "ListItemController"
	})
	.when("/signup", {
		templateUrl: "app/views/signUp.html",
		controller: "SignUpController"
	})
	.when("/connect", {
		templateUrl: "app/views/connect.html",
		controller: "ConnectController"
	})
	.when("/article/:id", {
		templateUrl: "app/views/details.html",
		controller: "DetailController"
	})
	.when("/validatePayment", {
		templateUrl: "app/views/validatePayment.html",
		controller: "ValidatePaymentController",
	})
	.when("/basket", {
		templateUrl: "app/views/basket.html",
		controller: "BasketController",
	})
	.when("/payment", {
		templateUrl: "app/views/payment.html",
		controller: "PaymentController"
	})
	.when("/history", {
		templateUrl: "app/views/history.html",
		controller: "HistoryController"
	})
	.otherwise({
		redirectTo: "/"
	})
});
