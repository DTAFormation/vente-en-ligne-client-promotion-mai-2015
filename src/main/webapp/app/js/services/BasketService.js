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
			if (typeof(item.quantity) == 'undefined'||item.quantity===0||item.quantity===null) {
				alert("Erreur de saisie - La quantité d'article a été fixée à votre place à 1")
				item.quantity=1
			}
			
			var q = (item.quantity).toString();
			q= +((q).replace(/,/,'.'));//gestion de la virgule de type -> , ou .
			
			if(q === parseInt(q)){
				//saisie valide -> on place l'item dans le panier
				item.quantity= parseInt(item.quantity);
				basket.push(item);
				window.localStorage.setItem("basket", JSON.stringify(basket));

			}
			else{
				alert("Erreur de saisie - La quantité n'est pas un entier")
			}

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
