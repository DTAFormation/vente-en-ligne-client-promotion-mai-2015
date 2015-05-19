angular.module("venteEnLigne")

.controller("ModifProfileController",function(ProfilService, ModalService, $routeParams, $location, $scope){

    $scope.user = {};
    $scope.newProfile = {};
    
    ProfilService.getProfil(window.sessionStorage.getItem("connected"))
    .then(function(result){
        $scope.user = {entity: result.data};
    },
    function(error){
        console.log(error);
    });
    
    
    $scope.modifyProfil = function () {        
        ProfilService.modifyProfil(window.sessionStorage.getItem("connected"),$scope.newProfile) 
        .then(
                function(result) {            
                    ModalService.openModal(
                            "Mofification done",
                            "Your profile has been modify.",
                            "OK"
                        ).result.then(
                                $scope.goToProfile,
                                $scope.goToProfile
                        )
                }
            )
    }
    
    
    $scope.goToProfile= function () {
        $location.path("/user");
    };
    
    
    
    $scope.goToHome= function () {
        $location.path("/");
    };
});