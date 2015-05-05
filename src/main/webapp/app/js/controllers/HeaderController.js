angular.module("venteEnLigne")

.controller("HeaderController", function($http, $scope, $modal) {
	var headerControl = this;
	
	//TODO: get the state of the connexion, login and all information from the cookies / localStorage or whereever it is stored
	headerControl.connected = false;
	headerControl.login = "toto";

	headerControl.currentPage = function() {
		return $location.path();
	}

	$scope.logout = function() {
		$http.get("/VentesEnLigneClient/j_spring_security_logout").then(
			function() {
				headerControl.connected = false;
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
	
});
