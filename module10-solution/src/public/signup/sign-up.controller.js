(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MyinfoService'];
function SignUpController(MyinfoService) {
  var $ctrl = this;

  // SAve Data
  // Calls validation in service
  $ctrl.signup = function() {
    MyinfoService.validateFavDish($ctrl.user.favDish)
    .then(
      function (response) {
        if ( response === true) {
          MyinfoService.setMyInfo($ctrl.user);
          $ctrl.successSave = true;
          $ctrl.successItem = true;
        }else {
          $ctrl.successSave = false;
          $ctrl.successItem = false;
        }
      }
    );
  };

}

})();
