describe('HeaderController', function() {
    beforeEach(function() {
        module('venteEnLigne');
    });

    beforeEach(inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        $controller('HeaderController', {$scope: scope});
    }));

    it("Should return the url '/test'", inject(function($rootScope, $controller, $location) {
        scope.goToPage("test");
        expect($location.path()).toEqual("/test");
    }));

    it("Should return the url '/test'", inject(function($rootScope, $controller) {
        scope.goToPage("test");
        expect(scope.currentPage()).toEqual("/test");
    }));
});