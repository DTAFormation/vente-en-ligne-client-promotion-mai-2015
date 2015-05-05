angular.module("venteEnLigne").controller("SignUpController", function (ProfilService, $scope, $modal) {
	
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
		var modalInstance = $modal.open({
			animation: true,
			templateUrl: 'app/views/modalInscriptionSuccessContent.html',
			controller: 'ModalInstanceCtrl'			
		});
	};	
	
	$scope.sauvegardeNoOk = function () {		
		var modalInstance = $modal.open({
			animation: true,
			templateUrl: 'app/views/modalInscriptionFailureContent.html',
			controller: 'ModalInstanceCtrl'			
		});
	};	
	
	$scope.sauvegardeExists = function () {		
		var modalInstance = $modal.open({
			animation: true,
			templateUrl: 'app/views/modalInscriptionExistsContent.html',
			controller: 'ModalInstanceCtrl'			
		});
	};		
	
});

angular.module('venteEnLigne').controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
	$scope.ok = function () {
		$modalInstance.close();
	};
}); 
