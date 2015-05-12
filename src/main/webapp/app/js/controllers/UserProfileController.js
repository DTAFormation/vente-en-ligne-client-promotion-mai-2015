angular.module("venteEnLigne")

.controller("UserProfileController",function(ProfilService, $scope, $routeParams, ModalService, $location){

	$scope.user = {};

	ProfilService.getProfil(window.sessionStorage.getItem("connected"))
	.then(function(result){
		console.log($routeParams);
		$scope.user = {entity: result.data};
	},
	function(error){
		console.log(error);
	});
	
	$scope.deleteProfil = function () {
		ProfilService.deleteProfil($routeParams.id) 
		.then(
			function(result) {			
				$scope.deleteOk();										
			}
		);
	};	
	$scope.deleteOk = function () {
		ModalService.openModal(
			"Delete done",
			"Your profil has been deleted",
			"OK"
		).result.then(
			$scope.goToConnect,
			$scope.goToConnect	
		);
	};
	
	$scope.goToConnect = function () {
		$location.path("/connect");
	};
});