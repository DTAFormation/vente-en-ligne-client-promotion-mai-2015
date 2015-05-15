angular.module("venteEnLigne").controller("ConnectController", function(ConnectService, BasketService, ModalService, $scope, $location, $rootScope, BasketService) {
	$scope.logins = {};
	$scope.inError = false;

	$scope.connect = function() {
		if($scope.connectForm.$valid) {
			ConnectService.connect($scope.logins).then(
				function(response) {
					ConnectService.setConnected($scope.logins.usr);
					
					//get the saved basket
					BasketService.initializeBasket().then(function(result){
						var basket = result.data
						if(basket == null){
							basket = []
						}	
						window.localStorage.setItem("basket", JSON.stringify(basket));
						console.log("basket service: ")
						console.log(basket)
						$scope.basket = basket
						$scope.initialized = true
					});
					
					ModalService.openModal(
						"Logged in",
						"Welcome " + $scope.logins.usr,
						"OK"
					).result.then(	
							$scope.redirection,
							$scope.redirection
					);
				},
				function(error) {
					$scope.inError = true;
				}
			);
		}
	};

	function backToLastPage() {
		$location.path($rootScope.lastPage || "/");
	}
	
	$scope.redirection = function() {
		if(BasketService.getBasket().toString()==[]) {
			$location.path($rootScope.lastPage || "/");
		}
		else {
			$location.path("/validatePayment");
		}
	}
	
	$scope.goToSignUp = function() {
		$location.path("/signup");
	};
	
	$scope.goToPurchase = function() {
		$location.path("/validatePayment");
	};
	

});