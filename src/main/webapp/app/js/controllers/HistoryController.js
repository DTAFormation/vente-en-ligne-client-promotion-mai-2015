angular.module("venteEnLigne")

.controller('HistoryController', function(ConnectService, $scope){
	
	$scope.cmds = [{date:"05/05/2005"},{date:"05/05/2005"},{date:"05/05/2005"}];

	$scope.getCommands = function(){
		console.log("inside getCommands");
	}

	angular.element(document).ready(function () {
		$scope.getCommands();
	});
})