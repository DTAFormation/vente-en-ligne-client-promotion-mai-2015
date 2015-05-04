angular.module("venteEnLigne").controller("ConnectController", function(ConnectService) {
	this.logins = {};

	this.connect = function() {
		if(this.connectForm.$valid) {
			ConnectService.connect(this.logins);
		}
	}

});