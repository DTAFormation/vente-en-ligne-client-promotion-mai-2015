angular.module("venteEnLigne").factory("BasketService", function($http, $location) {
	return {
		version: "1.0",

		addItem : function(item) {
			
			var webStorage = window['localStorage'];
			var basket = JSON.parse(webStorage.getItem('basket'));
						
			if (basket == null) {
				basket=[];
			}
			basket = basket.filter(function(v) {
				return v.article_id!=item.article_id
			});
			
			basket.push(item);
			
			webStorage.setItem("basket", JSON.stringify(basket));
			console.log("CONTENU DU PANIER COURANT APRES AJOUT : ");
			console.log(webStorage.getItem("basket"));
			
		},

		deleteBasket: function() {
			localStorage.setItem("basket", "");
		}
		
	};
});