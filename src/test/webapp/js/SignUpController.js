describe('SignUpController', function() {

	// Avant chaque test
	beforeEach(function() {
		module('venteEnLigne');
	});

	// Avant chaque test
	beforeEach(inject(function($rootScope, $controller) {
		// create an empty scope
		scope = $rootScope.$new();
		// declare the controller and inject our empty scope
		$controller('SignUpController', {
			$scope : scope
		});
	}));

	// Test
	
});