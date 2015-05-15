describe('ConnectController', function() {
	beforeEach(function() {
		module('venteEnLigne');
	});

	beforeEach(inject(function($rootScope, $controller){
		scope = $rootScope.$new();
		$controller('ConnectController', {$scope: scope});
	}));

	it("Should return the url '/signup'", inject(function($rootScope, $controller, $location) {
		scope.goToSignUp();
		expect($location.path()).toEqual("/signup");
	}));

});