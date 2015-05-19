angular.module("venteEnLigne")

.controller('HistoryController', function(ConnectService, CommandeService, $scope){
    
    $scope.cmds = [];
    $scope.index;

    $scope.getCommands = function(){
        CommandeService.getCommande(ConnectService.getConnectedUser())
        .then(function(result){
            $scope.cmds = result.data;
        });
    }

    angular.element(document).ready(function () {
        $scope.getCommands();
    });
    
    $scope.getTotalPrice = function(cl){
    	var total = 0;
    	console.log(cl)
    	for (var key in cl) {
    		console.log(key)
    		  if (cl.hasOwnProperty(key)) {
    		    total = total + cl[key].entity.price * cl[key].quantity
    		 }
    	}
    	return total
    }
    
    $scope.proccessShow = function(i){
    	if(i == $scope.index){
    		$scope.index = null
    	}else{
    		$scope.index = i;
    	}
    }

})