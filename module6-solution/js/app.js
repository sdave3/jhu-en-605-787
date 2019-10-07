(function (){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope', '$filter'];

  function LunchCheckController($scope, $filter){
    $scope.lunchMenu = "";
    $scope.tooMuchMsg = "";
    $scope.tooMuchMsgColor = "";
    $scope.tooMuchMsgColorStyle = "";
    $scope.testmsg = "";

    $scope.tooMuch = function () {
      if ($scope.lunchMenu === ""){
        $scope.tooMuchMsgColor = "red"
        $scope.tooMuchMsgColorStyle = "border:3px solid";
        $scope.tooMuchMsg = "Please enter data first";
      }else {
        var lunchMenuArr = $scope.lunchMenu.split(',');
        lunchMenuArr = lunchMenuArr.filter(Boolean);
        $scope.tooMuchMsgColor = "green";
        $scope.tooMuchMsgColorStyle = "border:3px solid";
        if(lunchMenuArr.length <= 3) {
          $scope.tooMuchMsg = "Enjoy!";
        }else if(lunchMenuArr.length > 3){
          $scope.tooMuchMsg = "Too much!";
        }
      }
    };
  };

})();
