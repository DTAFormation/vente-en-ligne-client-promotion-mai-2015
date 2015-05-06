angular.module("venteEnLigne")
.factory("ModalService",function($http,$location,$modal){
	return {
		openModal : function(headerText, bodyText, footerText) {
			var modalInstance = $modal.open({
				animation: true,
				templateUrl: 'app/views/modalGenericContent.html',
				controller: 'ModalController',
				resolve: {
					texts: function() {
						return {
							"headerText": headerText,
							"bodyText": bodyText,
							"footerText": footerText
						};
					}
				}
			});
		}
	}
})