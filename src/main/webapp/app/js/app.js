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
	.when("/article/:id", {
		templateUrl: "app/views/details.html",
		controller: "DetailController",
		controllerAs: "detailCtrl"
	})

	.when("/validatePayment", {
		templateUrl: "app/views/validatePayment.html",
		controller: "ValidatePaymentController",
		controllerAs: "validatePaymentControl"
	})
	.when("/articles", {
		templateUrl: "app/views/showItems.html",
		controller: "ListItemController",
		controllerAs: "listItemCtrl"
	.when("/basket", {
		templateUrl: "app/views/basket.html",
		controller: "BasketController",
		controllerAs: "basketControl"
	})
	.otherwise({
		redirectTo: "/"
	});
});
