angular.module("venteEnLigne").controller("ConnectController", function(ConnectService, $scope, $location) {
	$scope.logins = {};
	$scope.inError = false;

	$scope.connect = function() {
		if($scope.connectForm.$valid) {
			ConnectService.connect($scope.logins).then(
				function(response) {
					ConnectService.setConnected($scope.logins.usr);
					$location.path("/");
				},
				function(error) {
					$scope.inError = true;
				}
			);
		}
	};

	$scope.goToSignUp = function() {
		$location.path("/signup");
	};

});