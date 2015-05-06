angular.module("venteEnLigne").factory("BasketService", function($http, $location) {
	return {
		version: "1.0",

		addItemToBasket : function(item) {
			
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
			
		},

		deleteBasket: function() {
			localStorage.setItem("basket", "");
		}
		
	};
});