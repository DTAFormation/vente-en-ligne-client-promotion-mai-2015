angular.module("venteEnLigne")

.controller("UserProfileController",function(ProfilService, $scope, $routeParams, ModalService, $location){

	$scope.user = {};

	ProfilService.getProfil($routeParams.id)
	.then(function(result){
		$scope.user = {entity: result.data};
	},
	function(error){
		console.log(error);
	});
	
	$scope.deleteProfil = function () {		
		ProfilService.deleteProfil($routeParams.id) 
		.then(
			function(result) {			
				$scope.deleteDone();										
			}
		);
	};	
	
	$scope.deleteConfirmation = function () {
		ModalService.openModal(
			"Delete",
			"Do you want to delete your profile ?",
			"OK"
		).result.then(
			$scope.deleteProfil
		);
	};
	
	$scope.deleteDone = function () {
		ModalService.openModal(
			"Delete",
			"Your profil has been deleted",
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