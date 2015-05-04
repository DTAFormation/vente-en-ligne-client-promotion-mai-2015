angular.module("venteEnLigne", ["ngRoute", "ui.bootstrap"])

.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "app/views/welcome.html",
	})
	.otherwise({
		redirectTo: "/"
	});
});