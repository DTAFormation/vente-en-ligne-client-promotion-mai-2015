angular.module("venteEnLigne").controller("ConnectController", function(ConnectService, $scope) {
	$scope.logins = {};

	$scope.connect = function() {
		if($scope.connectForm.$valid) {
			ConnectService.connect(this.logins);
		}
	}

});