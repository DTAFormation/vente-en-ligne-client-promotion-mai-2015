angular.module("venteEnLigne")

.controller("ModifProfileController",function(ProfilService, $scope, $routeParams){

	$scope.user = {};
	$scope.newProfile = {};
	
	ProfilService.getProfil(window.sessionStorage.getItem("connected"))
	.then(function(result){
		$scope.user = {entity: result.data};
	},
	function(error){
		console.log(error);
	});
	
	
	$scope.modifyProfil = function () {		
		ProfilService.modifyProfil(window.sessionStorage.getItem("connected"),$scope.newProfile) 
		.then(
				function(result) {			
								
				},
				function(error) {

				}
			);
	
	};
	
	
	
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