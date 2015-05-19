angular.module("venteEnLigne").factory("AddressService", function ($http) {
    return {
        saveAddress: function (address) {
            return $http.post("/VentesEnLigneClient/rest/address", address)
        }
    }
});