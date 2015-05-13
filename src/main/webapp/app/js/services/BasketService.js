angular.module("venteEnLigne").factory("BasketService", function($http) {
	return {
		version: "1.0",

		
		
		saveBasket : function(item){
			var linecommand={};
			linecommand.quantity = item.quantity;
			linecommand.article=item.entity;
			return $http.post("/VentesEnLigneClient/rest/linecommand", linecommand)
		},
		
		addItemToBasket : function(item) {
			
			var basket = JSON.parse(window.localStorage.getItem("basket"));
						
			if (basket == null) {
				basket=[];
			}

			//Vérification si l'objet est déjà présent dans le basket
			var itemAMAJ;
			var itemAMAJExists = false;
			for (var i = 0; i < basket.length; i++){
				console.log(basket[i]);
				if(basket[i].entity.articleId == item.entity.articleId){
					itemAMAJ = basket[i];
					itemAMAJExists = true;
					break;
				}
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
				//on vérifie au préalable s'il existe déjà dans le panier
				if(itemAMAJExists){
					item.quantity= itemAMAJ.quantity + parseInt(item.quantity);
				}else{
					item.quantity= parseInt(item.quantity);
				}
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

		updateItemInBasket : function(item) {
			
			var basket = JSON.parse(window.localStorage.getItem("basket"));

			//récupération de l'objet à updater dans le basket
			var itemToUpdate;
			for (var i = 0; i < basket.length; i++){
				if(basket[i].entity.articleId == item.entity.articleId){
					itemToUpdate = basket[i];
					break;
				}
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
				item.quantity = parseInt(item.quantity);
				basket.push(item);
				window.localStorage.setItem("basket", JSON.stringify(basket));
				result = result || {error: false};
			}
			else{
				result = {error: "Wrong value - Please enter a whole number"};
			}
			

			return result;
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
