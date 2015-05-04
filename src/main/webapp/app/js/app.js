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
	.when("/basket", {
		templateUrl: "app/views/basket.html",
		controller: "BasketController",
		controllerAs: "basketControl"
	})
	.otherwise({
		redirectTo: "/"
	});
});