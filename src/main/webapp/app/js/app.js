angular.module("venteEnLigne", ["ngRoute", "ui.bootstrap"])

.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "app/views/welcome.html"
	})
	.when("/signin", {
		templateUrl: "app/views/signin.html"
	})
	.when("/connect", {
		templateUrl: "app/views/connect.html",
		controller: "ConnectController",
		controllerAs: "connectControl"
	})
	.when("/details", {
		templateUrl: "app/views/details.html",
		controller: "DetailController",
		controllerAs: "detailCtrl"
	})
	.otherwise({
		redirectTo: "/"
	});
});