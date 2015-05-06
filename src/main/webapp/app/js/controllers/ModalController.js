angular.module("venteEnLigne")
.controller("ModalController", function ($scope, $modalInstance, texts) {
	$scope.headerText = texts.headerText;
	$scope.bodyText = texts.bodyText;
	$scope.footerText = texts.footerText;
	
	$scope.ok = function () {
		$modalInstance.close();
	};
});