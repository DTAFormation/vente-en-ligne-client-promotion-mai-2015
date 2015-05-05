angular.module("venteEnLigne")

.controller("HeaderController", function($http, $scope, $modal, $location, BasketService, ConnectService) {
	var headerControl = this;
	
	//TODO: get the state of the connexion, login and all information from the cookies / localStorage or whereever it is stored
	headerControl.connected = true;
	headerControl.login = "toto";

	$scope.currentPage = function() {
		return $location.path();
	};

	$scope.goToPage = function(page) {
		var path = "/" + page;
		$location.path(path);
	};

	$scope.logout = function() {
		$http.get("/VentesEnLigneClient/j_spring_security_logout").then(
			function() {
				BasketService.deleteBasket();
				ConnectService.setConnected(false);
				$scope.open();
			}
		);
	};

	$scope.open = function (size) {
		
		var modalInstance = $modal.open({
			animation: true,
			templateUrl: 'app/views/modalLogoutContent.html',
			controller: 'ModalController',
			size: size
		});
	};

	$scope.isConnected = function() {
		return ConnectService.isConnected();
	};

	$scope.getConnectedUser = function() {
		return ConnectService.getConnectedUser();
	};
	
});
