angular.module("venteEnLigne").factory("BasketService", function() {
	return {
		version: "1.0",

		addItemToBasket : function(item) {
			
			var basket = JSON.parse(window.localStorage.getItem("basket"));
						
			if (basket == null) {
				basket=[];
			}
			basket = basket.filter(function(v) {
				return v.articleId!=item.articleId
			});
			basket.push(item);

			window.localStorage.setItem("basket", JSON.stringify(basket));
		},
		
		deleteItemFromBasket : function(item) {
			
			var basket = JSON.parse(window.localStorage.getItem("basket"));
						
			if (basket == null) {
				basket=[];
			}
			basket = basket.filter(function(v) {
				return v.articleId!=item.articleId
			});
			window.localStorage.setItem("basket", JSON.stringify(basket));
		},

		deleteBasket: function() {
			window.localStorage.setItem("basket", "[]");
		},
		
		getBasket: function() {
			var basket = JSON.parse(window.localStorage.getItem("basket"));
			if (basket == null) {
				basket = []
			}
			return basket;
		}
	};
});
