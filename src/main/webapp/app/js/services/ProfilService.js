angular.module("venteEnLigne").factory("ProfilService", function ($http) {
	return {
		saveProfil: function (profil) {
			return $http.post("/VentesEnLigneClient/rest/user", profil)
		},
		getProfil : function (id){
			return   $http.get("/VentesEnLigneClient/rest/user/"+id);
		},
		deleteProfil: function (id) {
			return $http['put']("/VentesEnLigneClient/rest/user/"+id);
		}
	}
});