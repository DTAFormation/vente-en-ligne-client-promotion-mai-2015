angular.module("venteEnLigne").factory("ProfilService", function ($http) {
	return {
		saveProfil: function (profil) {
			return $http.post("/VentesEnLigneClient/rest/user", profil)
		}
	}
});