describe('ListItemController', function() {
      beforeEach(function() {
          module('venteEnLigne');
      });
      
      beforeEach(inject(function($rootScope, $controller,BasketService){
            //create an empty scope
            scope = $rootScope.$new();
            //declare the controller and inject our empty scope
            $controller('ListItemController', {$scope: scope});
            BasketService.deleteBasket();
        }));
        
       it('should change path to article/item.id', inject(function($rootScope, $controller,ItemService,$location) {
              scope.showItem({"articleId":"1","name":"toto","price":"15"});
              expect($location.path()).toEqual("/article/1");
       }));
   
    });