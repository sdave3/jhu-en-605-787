(function () {
'use strict';

angular.module('data', [])
	.service('MenuDataService', MenuDataService)
  .constant('ApiAllCatagories', "https://davids-restaurant.herokuapp.com/categories.json")
  .constant('ApiItemsForCatagory', "https://davids-restaurant.herokuapp.com/menu_items.json");

  MenuDataService.$inject = ['$http', 'ApiAllCatagories', 'ApiItemsForCatagory']
  function MenuDataService($http, ApiAllCatagories, ApiItemsForCatagory){
    var service = this;

		// Get All Categories
    service.getAllCategories = function (){
      return $http({
        method : "GET",
        url : ApiAllCatagories
      }).then (
        function (response){
          return response.data;
        });
    };

		// Category Specific Item
    service.getItemsForCategory = function (categoryShortName){
      return $http({
        method : "GET",
        url : ApiItemsForCatagory,
				params: { category: categoryShortName }
      }).then (
        function (response){
					console.log(response.data);
					return response.data;
        });
    };
  }
})();
