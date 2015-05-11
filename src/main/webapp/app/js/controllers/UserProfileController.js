angular.module("venteEnLigne")

.controller("UserProfileController",function(ProfilService, $scope, $routeParams){

	$scope.user = {};


	ProfilService.getProfil($routeParams.id)
	.then(function(result){
		console.log($routeParams);
		$scope.user = {entity: result.data};

	},
	function(error){
		console.log(error);
	});
});