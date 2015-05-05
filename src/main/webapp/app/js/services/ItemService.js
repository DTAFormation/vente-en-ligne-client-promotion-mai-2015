angular.module("venteEnLigne")

.factory("ItemService",function($http,$location){

	return {
		version : "1.0",
		getItems : function (){
			return   $http.get("/VentesEnLigneClient/rest/articles")
              .then(function(result){
               //console.log("http ",result)
              	return result.data ;
              },
              function(error){
                     alert("probleme connexion")
              }) 
  
		},
		getItem : function (id){
			return   $http.get("/VentesEnLigneClient/rest/article/"+id)
              .then(function(result){
              	return result.data ;
              },
              function(error){
                     alert("probleme connexion")
              }) 
  
		},
		
		showItem : function(item) {
			
			$location.path("/article/"+item.article_id)
		},

		addItem : function(item) {
			
			var webStorage = window['localStorage'];
			var basket = JSON.parse(webStorage.getItem('basket'));
						
			if (basket == null) {
				basket=[];
			}
			basket = basket.filter(function(v) {
				return v.article_id!=item.article_id
			});
			
			basket.push(item);
			
			webStorage.setItem("basket", JSON.stringify(basket));
			console.log("CONTENU DU PANIER COURANT APRES AJOUT : ");
			console.log(webStorage.getItem("basket"));
			
		}
		
	}
}) 