angular.module("venteEnLigne")

.controller("UserProfileController",function(ProfilService, ConnectService, $scope, $routeParams, ModalService, $location){

	$scope.user = {};

	ProfilService.getProfil(window.sessionStorage.getItem("connected"))
	.then(function(result){
		$scope.user = {entity: result.data};
	},
	function(error){
		console.log(error);
	});
	
	$scope.deleteProfil = function () {		
		ProfilService.deleteProfil(window.sessionStorage.getItem("connected")) 
		.then(
			function(result) {			
				$scope.deleteDone();										
			}
		);
		ConnectService.setDisconnected()
	};	
	
	$scope.deleteConfirmation = function () {
		ModalService.openModal(
			"Warning !",
			"Do you really want to delete your profile ? :(",
			"OK"
		).result.then(
			$scope.deleteProfil
		);
	};
	
	$scope.deleteDone = function () {
		ModalService.openModal(
			"See you",
			"Your profile has been deleted. You will now be logged out.",
			"OK"
		).result.then(
			$scope.goToHome,
			$scope.goToHome
		);
	};
	
	$scope.goToHome= function () {
		$location.path("/");
	};
	
});