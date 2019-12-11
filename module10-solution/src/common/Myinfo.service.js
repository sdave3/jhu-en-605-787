(function () {
  "use strict";
  angular.module('common')
  .service('MyinfoService', MyinfoService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items");;

  MyinfoService.$inject = ['$http', 'ApiBasePath'];
  function MyinfoService() {
    var service = this;
    service.item = {};

    // Save USer info
    service.setMyInfo = function (user) {
      service.myInfo = user;
    }

    // Retrive User info
    service.getMyInfo = function () {
      return service.myInfo;
    }

    //Validate fav dish for user
    service.validateFavDish = function(shortName){
      return $http({
        method: "GET",
        url: (ApiBasePath + '/' + shortName + '.json')
      }).then(
        function (response) {
          service.item = response.data;
          return true;
        }
      );
    };
  }

})();
