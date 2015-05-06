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
		controllerAs: "validatePaymentControl"
	})
	.when("/basket", {
		templateUrl: "app/views/basket.html",
		controller: "BasketController",
		controllerAs: "basketControl"
	})
	.otherwise({
		redirectTo: "/"
	})
});
