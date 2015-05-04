angular.module("venteEnLigne", ["ngRoute"])

.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "app/views/welcome.html",
	})
	.otherwise({
		redirectTo: "/"
	});
});