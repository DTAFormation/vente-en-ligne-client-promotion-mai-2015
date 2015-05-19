angular.module("venteEnLigne").factory("ProfilService", function ($http) {
    return {
        saveProfil: function (profil) {
            return $http.post("/VentesEnLigneClient/rest/user", profil)
        },
        getProfil : function (login){
            return   $http.get("/VentesEnLigneClient/rest/user/"+login);
        },
        deleteProfil: function (login) {
            return $http['put']("/VentesEnLigneClient/rest/user/"+login);
        },
        modifyProfil: function (login, newProfile) {
            return $http['put']("/VentesEnLigneClient/rest/user/modifyUser/"+login,newProfile);
        }
    }
});