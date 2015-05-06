angular.module("venteEnLigne")

.controller("HeaderController", function($http, $scope, $location, BasketService, ConnectService, ModalService) {

	$scope.currentPage = function() {
		return $location.path();
	};

	$scope.goToPage = function(path) {
		$location.path(path);
	};

	$scope.logout = function() {
		$http.get("/VentesEnLigneClient/j_spring_security_logout").then(
			function() {
				BasketService.deleteBasket();
				ConnectService.setConnected(false);
				ModalService.openModal(
					"Logged out",
					"You have successfully logged out !",
					"OK"
				).result.then(
					backToHome,
					backToHome
				);
			}
		);
	};

	function backToHome() {
		$location.path("/");
	}

	$scope.isConnected = function() {
		return ConnectService.isConnected();
	};

	$scope.getConnectedUser = function() {
		return ConnectService.getConnectedUser();
	};
	
});
