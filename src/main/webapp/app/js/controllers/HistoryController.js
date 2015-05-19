angular.module("venteEnLigne")

.controller('HistoryController', function(ConnectService, CommandeService, $scope){
    
    $scope.cmds = [];

    $scope.getCommands = function(){
        CommandeService.getCommande(ConnectService.getConnectedUser())
        .then(function(result){
            console.log(result)
            $scope.cmds = result.data;
        });
    }

    angular.element(document).ready(function () {
        $scope.getCommands();
    });
})