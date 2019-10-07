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
        $scope.tooMuchMsgColor = "green";
        $scope.tooMuchMsgColorStyle = "border:3px solid";
        var lunchMenuArr = $scope.lunchMenu.split(',');
        lunchMenuArr = lunchMenuArr.filter(Boolean);
        for ( var x in lunchMenuArr){
          if ((lunchMenuArr[x].trim()).length === 0 ){
             lunchMenuArr.splice(x,1);
          }
        }
        if(lunchMenuArr.length <= 3) {
          $scope.tooMuchMsg = "Enjoy!";
        }else if(lunchMenuArr.length > 3){
          $scope.tooMuchMsg = "Too much!";
        }
        $scope.testmsg = lunchMenuArr;
      }
    };
  };

})();
