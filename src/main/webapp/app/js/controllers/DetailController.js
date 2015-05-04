angular.module("venteEnLigne")

.controller("DetailController",function($http){
	var ctrl = this;
	var article=article;
	  function	getArticle(){
			 $http.get("/VentesEnLigneClient/rest/article")
            .then(function(result){
            	ctrl.article = result.data ;
            },
            function(error){
                   alert("probleme connexion")
            }) 
		}
	  getArticle();
});