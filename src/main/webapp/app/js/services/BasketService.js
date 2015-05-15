angular.module("venteEnLigne").factory("BasketService", function($http, CommandeService, ConnectService) {
	return {
		version: "1.0",
		
		initialized: false,
		
		saveBasketCommand : function(item){
			var linecommand={};
			linecommand.quantity = item.quantity;
			linecommand.article=item.entity;
			console.log(linecommand);
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
					//on vérifie si la quantité demandée est disponible
					if(itemAMAJ.quantity + parseInt(item.quantity) <= item.entity.stock){
						item.quantity= itemAMAJ.quantity + parseInt(item.quantity);
						basket.push(item);
					}else{
						result = {error: "There are only " + item.entity.stock + " " + item.entity.name +  " in the stock and you already have " + itemAMAJ.quantity + " in your basket. Please enter a correct value"};
						basket.push(itemAMAJ);
					}
				}else{
					//on vérifie si la quantité demandée est disponible
					if(parseInt(item.quantity) <= item.entity.stock){
						item.quantity= parseInt(item.quantity);
						basket.push(item);
					}else{
						result = {error: "There are only " + item.entity.stock  + " " + item.entity.name + ". Please enter a correct value"};
					}	
				}
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
				if(parseInt(item.quantity) <= item.entity.stock){
					item.quantity = parseInt(item.quantity);
					basket.push(item);
				}else{
					result = {error: "There are only " + item.entity.stock  + " " + item.entity.name + ". Please enter a correct value"};
					basket.push(itemToUpdate);
				}
				
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
			
			console.log("in getBasket")
			if(!this.initialized){
				console.log("initilisation")
				basket = CommandeService.getUnvalidCommande(ConnectService.getConnectedUser())
				this.initialized = true
			}
			if(basket == null){
				basket = []
			}
			console.log(basket)
			return basket;
		}
	};
});
