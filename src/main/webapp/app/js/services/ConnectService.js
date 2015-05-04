angular.module("venteEnLigne").factory("ConnectService", function($http) {
	return {
		version: "1.0",

		connect: function(logins) {
			/*return $http.post("/rest/connect", logins).then(
				function(response) {
					return response;
				},
				function(error) {
					console.log(error);
					return error;
				}
			)*/
			logins.validated = true;
			return logins;
		}

	};
});