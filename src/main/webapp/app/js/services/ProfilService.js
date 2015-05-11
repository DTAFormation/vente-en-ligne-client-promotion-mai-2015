angular.module("venteEnLigne").factory("ProfilService", function ($http,$location) {
	return {
		saveProfil: function (profil) {
			return $http.post("/VentesEnLigneClient/rest/user", profil)
		},
		getProfil : function (id){
			return   $http.get("/VentesEnLigneClient/rest/user/"+id);
		},
		showProfil : function(user) {
			
			$location.path("/user/"+user.id)
		}
	}
});