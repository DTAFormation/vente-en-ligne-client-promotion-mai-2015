angular.module("venteEnLigne")

.controller('HistoryController', function(ConnectService, CommandeService, $scope){
	
	$scope.cmds = [];

	$scope.getCommands = function(){
		console.log("inside getCommands");
		$scope.cmds = CommandeService.getCommande(ConnectService.getConnectedUser());
	}

	angular.element(document).ready(function () {
		$scope.getCommands();
	});
})