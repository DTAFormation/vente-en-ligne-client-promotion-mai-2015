angular.module("venteEnLigne")
.factory("ProfilService", function ($http) {
	return {
		version: "1.0",

		saveProfil: function (profil) {
			return $http.post("/VentesEnLigneClient/rest/user", profil)
			// Modifier l'adresse de la base
		}
	}
})