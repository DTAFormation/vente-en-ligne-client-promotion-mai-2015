angular.module('venteEnLigne').controller('ModalInscriptionCtrl', function ($scope, $modal, $log) {

	//Call this function with 'lg', 'sm', or nothing
	$scope.open = function (size) {
		
		var modalInstance = $modal.open({
			animation: true,
			templateUrl: 'app/views/modalInscriptionContent.html',
			controller: 'ModalInstanceCtrl',
			size: size
		});
	}
});

angular.module('venteEnLigne').controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
	$scope.ok = function () {
		$modalInstance.close();
	};
});


