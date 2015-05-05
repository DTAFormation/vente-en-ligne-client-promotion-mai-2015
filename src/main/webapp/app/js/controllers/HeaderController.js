angular.module("venteEnLigne")
.controller("HeaderController", function($location) {
	var headerControl = this;
	
	//TODO: get the state of the connexion, login and all information from the cookies / localStorage or whereever it is stored
	headerControl.connected = false;
	headerControl.login = "toto";

	headerControl.currentPage = function() {
		return $location.path();
	}
})