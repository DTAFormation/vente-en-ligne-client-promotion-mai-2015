angular.module("venteEnLigne").factory("ConnectService", function($http) {
	return {
		version: "1.0",

		connect: function(logins) {
			var credentials = "j_username=" + logins.usr + "&j_password=" + logins.pwd;
			$http({
				method: "POST",
				url: "/VentesEnLigneClient/j_spring_security_check",
				data: credentials,
				headers: {"Content-Type": "application/x-www-form-urlencoded"}
			}).then(
				function(response) {
					return response;
				},
				function(error) {
					console.log(error);
					return error;
				}
			);
		}
	};
});