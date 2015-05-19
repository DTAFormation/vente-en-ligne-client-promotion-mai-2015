angular.module("venteEnLigne")

.factory("CommandeService", function ($http) {
    return {
        
        getCommande : function (login){
            return $http.get("/VentesEnLigneClient/rest/commande/commandes/"+login);
        },
        
        getUnvalidCommande : function(login){
            return $http.get("/VentesEnLigneClient/rest/commande/basket/"+login);
        },
        
        saveBasket : function(login){
            console.log("inside command service save basket")
            return $http.post("/VentesEnLigneClient/rest/commande/basket/", login);
        }
    }
});