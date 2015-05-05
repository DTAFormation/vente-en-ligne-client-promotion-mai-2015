angular.module("venteEnLigne").controller("ConnectController", function(ConnectService, $scope, $location) {
	$scope.logins = {};

	$scope.connect = function() {
		if($scope.connectForm.$valid) {
			ConnectService.connect($scope.logins).then(
				function() {
					ConnectService.setConnected($scope.logins.usr);
					$location.path("/");
				}
			);
		}
	}

});