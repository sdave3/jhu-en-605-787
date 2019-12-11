(function () {
"use strict";

angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MyinfoService'];
  function MyInfoController(MyinfoService) {
    var $ctrl = this;
    var user = MyinfoService.getMyInfo();
    $ctrl.isNotEmpty = function(){
      if (user.firstName != null){
        return true;
      }else{
        return false;
      }
    };
  }
})();
