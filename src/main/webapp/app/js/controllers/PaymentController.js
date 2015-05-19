angular.module("venteEnLigne")
.controller("PaymentController", function($scope, $location, BasketService) {
    $scope.validate = function() {
        BasketService.deleteBasket();
        $location.path("/showItems");
    }
})