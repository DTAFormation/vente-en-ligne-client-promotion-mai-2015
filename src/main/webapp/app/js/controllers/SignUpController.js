angular.module("venteEnLigne").controller("SignUpController", function (ProfilService, $scope, ModalService, $location) {
	
	$scope.profil = {};

	// Fonction de sauvegarde du formulaire
	$scope.saveProfil = function () {
		ProfilService.saveProfil($scope.profil) 
		.then(
			function(result) {			
				$scope.saveOk();					
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
					$scope.saveExists();
					break;
				default :
					$scope.saveNoOk();
				}
			}
		);
	};
	
	$scope.saveOk = function () {
		ModalService.openModal(
			"Inscription validation",
			"Congratulations, you have successfully subscribed !",
			"OK"
		).result.then(
			$scope.goToConnect,
			$scope.goToConnect	
		);
	};	
	
	$scope.saveNoOk = function () {
		ModalService.openModal(
			"Inscription failed",
			"The subscription has failed !",
			"OK"
		);
	};	
	
	$scope.saveExists = function () {
		ModalService.openModal(
			"Inscription failed",
			"Mail address or login already used !",
			"OK"
		);
	};		
	
	$scope.goToConnect = function () {
		$location.path("/connect");
	};
	
	
});
