angular.module("venteEnLigne").factory("BasketService", function() {
	return {
		version: "1.0",

		addItemToBasket : function(item) {
			
			var basket = JSON.parse(window.localStorage.getItem("basket"));
						
			if (basket == null) {
				basket=[];
			}
			basket = basket.filter(function(currentItem) {
				
				return currentItem.entity.articleId!=item.entity.articleId
				
				
			});
			// GESTION SAISIE UTILISATEUR
			var result;
			if (typeof(item.quantity) == 'undefined'||item.quantity===0||item.quantity===null) {
				result = {error: "Wrong value - Sent '1' instead"};
				item.quantity=1
			}
			
			var q = (item.quantity).toString();
			q= +((q).replace(/,/,'.'));//gestion de la virgule de type -> , ou .
			
			if(q === parseInt(q)){
				//saisie valide -> on place l'item dans le panier
				item.quantity= parseInt(item.quantity);
				basket.push(item);
				window.localStorage.setItem("basket", JSON.stringify(basket));
				result = result || {error: false};
			}
			else{
				result = {error: "Wrong value - Please enter a whole number"};
			}
			return result;
		},
		
		deleteItemFromBasket : function(item) {
			
			var basket = JSON.parse(window.localStorage.getItem("basket"));
						
			if (basket == null) {
				basket=[];
			}
			basket = basket.filter(function(currentItem) {
				return currentItem.entity.articleId!=item.entity.articleId
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
