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
	.when("/article/:id", {
		templateUrl: "app/views/details.html",
		controller: "DetailController",
		controllerAs: "detailCtrl"
	})
	.when("/articles", {
		templateUrl: "app/views/showItems.html",
		controller: "ListItemController",
		controllerAs: "listItemCtrl"
	})
	.otherwise({
		redirectTo: "/"
	});
});