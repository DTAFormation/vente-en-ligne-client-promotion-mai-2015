angular.module("venteEnLigne").controller("AddressController", function (AddressService,ProfilService, $scope, ModalService, $location) {
	
	$scope.address = {};

	// Fonction de sauvegarde du formulaire
	$scope.saveAddress = function () {
		AddressService.saveAddress($scope.address) 
		.then(
			function(result) {	
				
				angular.extend($scope.address, {
					country: '', postcode: '',
					departement: '', street: '',
					city: '', number: '',
				});		
				$scope.goToPayment();	
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
	
	$scope.goToPayment = function () {
		$location.path("/payment");
	};
	
	
});
