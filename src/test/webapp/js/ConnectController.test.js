describe('ConnectController', function() {
    beforeEach(function() {
        module('venteEnLigne');
        window.localStorage.removeItem("basket");
    });

/*    beforeEach(inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        $controller('ConnectController', {$scope: scope});        
    }));

    it("Should return the url '/signup'", inject(function($rootScope, $controller, $location) {
        scope.goToSignUp();
        expect($location.path()).toEqual("/signup");
    }));
    
    it("Should return the url '/validatePayment'", inject(function($rootScope, $controller, $location) {
        scope.goToPurchase();
        expect($location.path()).toEqual("/validatePayment");
    }));
    
    // when the basket is empty before the connection
    it("Should return the url '/'", inject(function($rootScope, $controller, $location, BasketService) {
        scope.redirection();
        expect($location.path()).toEqual("/");
    }));
    
    // when the basket is not empty before the connection
    it("Should return the url '/validatePayment'", inject(function($rootScope, $controller, $location, BasketService) {
        BasketService.addItemToBasket({"entity":{"articleId":1, "name":"truc", "stock":20}, "quantity":2});
        scope.redirection();
        expect($location.path()).toEqual("/validatePayment");
    }));
    
    
    afterEach(function() {
        window.localStorage.removeItem("basket");
    });*/

});