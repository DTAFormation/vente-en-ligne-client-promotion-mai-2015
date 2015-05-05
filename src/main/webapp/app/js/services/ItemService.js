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
		}
		
	}
}) 