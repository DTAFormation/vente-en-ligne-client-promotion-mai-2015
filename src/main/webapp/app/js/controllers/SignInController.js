angular.module("venteEnLigne") 
.controller("SignInController", function (ProfilService, $scope, $modal) {
	var signin = this;
	signin.title = "Controller title"

	// Fonction de sauvegarde du formulaire
	signin.saveProfil = function (profil) {
		// En cas d'erreur on affiche
		if(signin.profilForm.$invalid) {
			console.log("Informations non valides")
			return
		}

		// Copie de l'objet et envoie sur le serveur
		ProfilService.saveProfil(profil)
		.then(
			function(result) {
				console.log("Sauvegarde OK")
				
				$scope.open()	
				
				// Clean de l'objet
				angular.extend(profil, {
					firstName: '',
					lastName: '',
					email: '',
					login: '',
					password: '',
					telephone: '',
					fax: ''
				})						
			},
			function(error) {
				console.log("Sauvegarde non OK")
			}
		)


	}
	
	// Fonction modal
	$scope.open = function (size) {
		
		var modalInstance = $modal.open({
			animation: true,
			templateUrl: 'app/views/modalInscriptionContent.html',
			controller: 'ModalInstanceCtrl',
			size: size
		});
	}	
	
})

angular
.module('venteEnLigne').controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
	$scope.ok = function () {
		$modalInstance.close();
	};
}); 
