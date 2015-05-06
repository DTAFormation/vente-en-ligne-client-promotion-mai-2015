angular.module("venteEnLigne").factory("ConnectService", function($http) {
	return {
		version: "1.0",

		connect: function(logins) {
			var credentials = "j_username=" + logins.usr + "&j_password=" + logins.pwd;
			return $http({
				method: "POST",
				url: "/VentesEnLigneClient/j_spring_security_check",
				data: credentials,
				headers: {"Content-Type": "application/x-www-form-urlencoded"}
			});
		},

		setConnected: function(user) {
			sessionStorage.setItem("connected", user ? user : "false");
		},

		setDisconnected: function() {
			sessionStorage.setItem("connected", "false");
		},

		isConnected: function() {
			var connectedUser = sessionStorage.getItem("connected");
			if(connectedUser && connectedUser != "false") {
				return true;
			}
			return false;
		},

		getConnectedUser: function() {
			var connectedUser = sessionStorage.getItem("connected");
			if(connectedUser && connectedUser != "false") {
				return connectedUser;
			}
			return null;
		}

	};
});