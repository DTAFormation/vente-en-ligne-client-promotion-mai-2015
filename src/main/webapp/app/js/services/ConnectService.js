angular.module("venteEnLigne").factory("ConnectService", function($http) {
	return {
		version: "1.0",

		connect: function(logins) {
			return $http.post("/VentesEnLigneClient/rest/connect", logins).then(
				function(response) {
					console.log(response.data);
					return response;
				},
				function(error) {
					console.log(error);
					return error;
				}
			)
		}

	};
});