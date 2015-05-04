angular.module("venteEnLigne", ["ngRoute"])

.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "app/views/welcome.html"
	})
	.when("/connect", {
		templateUrl: "app/views/connect.html",
		controller: "ConnectController",
		controllerAs: "connectControl"
	})
	.when("/validatePayment", {
		templateUrl: "app/views/validatePayment.html",
		controller: "ValidatePaymentController",
		controllerAs: "validatePaymentControl"
	})
	.otherwise({
		redirectTo: "/"
	});
});