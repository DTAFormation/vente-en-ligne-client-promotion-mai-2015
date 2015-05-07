angular.module("venteEnLigne")

.controller("HeaderController", function($http, $scope, $location, $rootScope, BasketService, ConnectService, ModalService) {

	$scope.goToPage = function(path) {
		var lastPage = $scope.currentPage();
		if(lastPage != "/signup") {
			$rootScope.lastPage = $scope.currentPage();
		}
		$location.path(path);
	};

	$scope.currentPage = function() {
		return $location.path();
	};

	$scope.logout = function() {
		$http.get("/VentesEnLigneClient/j_spring_security_logout").then(
			function() {
				BasketService.deleteBasket();
				ConnectService.setDisconnected();
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
