angular.module(venteEnLigne)
.config( function ($routeProvider) {
	$routeProvider
	.when("/", {
		
	})
	.when("/signin", {
		templateUrl: "app/views/signin.html"
	})
	.otherwise({
		redirectTo: "/"
	})
})