angular.module("venteEnLigne")

.factory("CommandeService", function ($http) {
	return {
		
		getCommande : function (login){
			return $http.get("/VentesEnLigneClient/rest/commande/commandes/"+login);
		},
		
		getUnvalidCommande : function(login){
			return $http.get("/VentesEnLigneClient/rest/commande/basket/"+login);
		}
	}
});