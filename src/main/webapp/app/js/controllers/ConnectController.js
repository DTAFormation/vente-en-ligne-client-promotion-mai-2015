angular.module("venteEnLigne").controller("ConnectController", function(ConnectService) {
	this.logins = {};

	this.connect = function() {
		if(this.connectForm.$valid) {
			console.log(ConnectService.connect(this.logins));
		}
	}

});