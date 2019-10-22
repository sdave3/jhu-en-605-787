(function (){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    .filter('TotalPrice', TotalPriceFilter);

    // To Buy Controller
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
      var list = this;
      list.toBuy = ShoppingListCheckOffService.getToBuyList();
      list.addRemoveItem = function(index){
        ShoppingListCheckOffService.addRemoveItem(index);
      };
    };

    // Bought controller
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
      var list = this;
      list.bought = ShoppingListCheckOffService.getBoughtList();
    };

    // Service
    function ShoppingListCheckOffService(){
      var service = this;

      // Two initial Lists
      var toBuy = [
        {name: "cookies", quantity: 10, pricePerItem: 4.12},
        {name: "cakes", quantity: 2, pricePerItem: 37.12},
        {name: "candies", quantity: 12, pricePerItem: 2.3},
        {name: "chocolates", quantity: 125, pricePerItem: 1},
        {name: "pastries", quantity: 5, pricePerItem: 5.2},
        {name: "macaroons", quantity: 20, pricePerItem: 1.23}
      ];
      var bought = [];

      // get methods
      service.getToBuyList = function(){
        return toBuy;
      };

      service.getBoughtList = function(){
        return bought;
      };

      // add/remove method
      service.addRemoveItem = function(index){
        bought.push(toBuy[index]);
        toBuy.splice(index, 1);
      }
    }

    // Filter
    function TotalPriceFilter(){
      return function (pricePerItem, quantity){
        return "$$$" + (pricePerItem*quantity).toFixed(2);
      };
    };

})();
