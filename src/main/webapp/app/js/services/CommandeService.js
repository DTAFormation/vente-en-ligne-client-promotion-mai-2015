angular.module("venteEnLigne").factory("ProfilService", function ($http,$location) {
	return {
		getCommande : function (login){
			return   $http.get("/VentesEnLigneClient/rest/commande/"+login);
		}
	}
});