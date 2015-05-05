angular.module("venteEnLigne")

.controller("DetailController",function(ItemService,$routeParams){
	var ctrl = this;
	var article;
	 ItemService.getItem($routeParams.id)
	 .then(function(result){
	 	
	 	ctrl.article =result;
	},
        function(error){
               alert("probleme recup")
       })	 
	
});