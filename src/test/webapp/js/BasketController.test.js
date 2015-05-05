describe('BasketController', function() {
	  beforeEach(function() {
		  module('venteEnLigne');
		  module('venteEnLigne');
	  });

	    it('should be equals to hello world', inject(function($rootScope, $controller) {
	      var scope = $rootScope.$new();
	      var controller = $controller('BasketController', { $scope: scope });
	      scope.deleteBasket();
	      expect(window['localStorage'].basket).toEqual("");
	    }));
	});