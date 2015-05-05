angular.module("venteEnLigne").controller("SignInController", function (ProfilService, $scope, $modal) {
	
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
				$scope.sauvegardeNoOk();
			}
		);
	};
	
	$scope.sauvegardeOk = function () {		
		var modalInstance = $modal.open({
			animation: true,
			templateUrl: 'app/views/modalInscriptionSuccessContent.html',
			controller: 'ModalController'			
		});
	};	
	
	$scope.sauvegardeNoOk = function () {		
		var modalInstance = $modal.open({
			animation: true,
			templateUrl: 'app/views/modalInscriptionFailureContent.html',
			controller: 'ModalController'			
		});
	};	
	
});