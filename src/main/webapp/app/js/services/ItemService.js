angular.module("venteEnLigne")

.factory("ItemService",function($http,$location){

	return {
		getItems : function (){
			return   $http.get("/VentesEnLigneClient/rest/articles"); 
  
		},
		getItem : function (id){
			return   $http.get("/VentesEnLigneClient/rest/article/"+id);
		},
		
		showItem : function(item) {
			
			$location.path("/article/"+item.articleId)
		},

		updateStock : function(id, stock){
			return $http.post("/VentesEnLigneClient/rest/article/"+id + "/stock/"+stock);
		},
		
		updateRating : function(id, rating){
			return $http.post("/VentesEnLigneClient/rest/article/"+id+"/rating/"+rating);
		}		
	}
}) 
