angular.module("venteEnLigne").controller("ConnectController", function(ConnectService, BasketService, ModalService, $scope, $location, $rootScope, BasketService) {
	$scope.logins = {};
	$scope.inError = false;

	$scope.connect = function() {
		if($scope.connectForm.$valid) {
			ConnectService.connect($scope.logins).then(
					function(response) {
						ConnectService.setConnected($scope.logins.usr);

						//get the saved basket
						BasketService.initializeBasket().then(function(result){

							var basketLocal = JSON.parse(window.localStorage.getItem("basket"));
							if(basketLocal == null){
								basketLocal = []
							}
							var basket = basketLocal.concat(result.data)
							if(basket == null){
								basket = []
							}    
							window.localStorage.setItem("basket", JSON.stringify(basket));
							$scope.basket = basket
							$scope.initialized = true
						});

						ModalService.openModal(
								"Logged in",
								"Welcome " + $scope.logins.usr,
								"OK"
						).result.then(    
								$scope.redirection,
								$scope.redirection
						);
					},
					function(error) {
						$scope.inError = true;
					}
			);
		}
	};

	function backToLastPage() {
		$location.path($rootScope.lastPage || "/");
	}

	$scope.redirection = function() {
		if(BasketService.getBasket().toString()==[]) {
			$location.path($rootScope.lastPage || "/");
		}
		else {
			$location.path("/validatePayment");
		}
	}

	$scope.goToSignUp = function() {
		$location.path("/signup");
	};

	$scope.goToPurchase = function() {
		$location.path("/validatePayment");
	};

})

.directive('konami', [
                      '$document',
                      '$rootScope',
                      function($document, $rootScope) {
                    	  return {
                    		  restrict: 'A',
                    		  link: function() {
                    			  var keys = [100, 101, 115, 32, 116, 97, 108, 101, 110, 116, 115, 32, 97, 117, 100, 97, 99, 105, 101, 117, 120]
                    			  var i = 0;
                    			  $document.bind('keypress', function(e) {
                    				  console.log('Got keypress:', e.which);
                    				  if(e.which == keys[i]){
                    					  i++
                    					  if(i==21){
                    						  var deplaceX = 0;
                    						  var deplaceY = 0;

                    						  setInterval(function () {

                    							  for(i=0; i<10; i++){
                    								  myWindow=window.open("", i, "width=200, height=100");
                    								  myWindow.document.write("<img src=\"http://www.dta-ingenierie.fr/img/logoDTA2.png\">");
                    								  myWindow.resizeTo(300, 300);
                    								  deplaceX = Math.random() * 1000;
                    								  deplaceY = Math.random() * 1000;
                    								  myWindow.moveTo(deplaceX, deplaceY);
                    								  myWindow.focus();							  
                    							  }
                    						  }, 800);
                    					  }
                    				  }else{
                    					  i = 0
                    				  }
                    				  $rootScope.$broadcast('keypress', e);
                    				  $rootScope.$broadcast('keypress:' + e.which, e);
                    			  });
                    		  }
                    	  };
                      }
                      ]);
