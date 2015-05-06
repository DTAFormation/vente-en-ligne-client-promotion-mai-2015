angular.module("venteEnLigne").controller("ConnectController", function(ConnectService, ModalService, $scope, $location) {
	$scope.logins = {};
	$scope.inError = false;

	$scope.connect = function() {
		if($scope.connectForm.$valid) {
			ConnectService.connect($scope.logins).then(
				function(response) {
					ConnectService.setConnected($scope.logins.usr);
					ModalService.openModal(
						"Logged in",
						"Welcome " + $scope.logins.usr,
						"OK"
					).result.then(
						backToHome,
						backToHome
					);
				},
				function(error) {
					$scope.inError = true;
				}
			);
		}
	};

	function backToHome() {
		$location.path("/");
	};

	$scope.goToSignUp = function() {
		$location.path("/signup");
	};

});