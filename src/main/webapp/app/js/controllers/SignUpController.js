angular.module("venteEnLigne").controller("SignUpController", function (ProfilService, $scope, ModalService) {
	
	$scope.profil = {};

	// Fonction de sauvegarde du formulaire
	$scope.saveProfil = function () {
		ProfilService.saveProfil($scope.profil) 
		.then(
			function(result) {			
				$scope.sauvegardeOk();					
				angular.extend($scope.profil, {
					firstName: '', lastName: '',
					email: '', login: '',
					password: '', telephone: '',
					fax: ''
				});						
			},
			function(error) {
				switch(error.status) {
				case 400 :
					$scope.sauvegardeExists();
					break;
				default :
					$scope.sauvegardeNoOk();
				}
			}
		);
	};
	
	$scope.sauvegardeOk = function () {
		ModalService.openModal(
			"Inscription validation",
			"Congratulations, you have successfully subscribed !",
			"OK"
		);
	};	
	
	$scope.sauvegardeNoOk = function () {
		ModalService.openModal(
			"Inscription failed",
			"The subscription has failed !",
			"OK"
		);
	};	
	
	$scope.sauvegardeExists = function () {
		ModalService.openModal(
			"Inscription failed",
			"Mail address already used !",
			"OK"
		);
	};		
	
});
