"use strict";
app.controller ('singleViewCtrl', function($scope, guideFactory, $routeParams){
  //$scope.welcome = "Let's have some fun!";
  console.log("routeParams PMF", $routeParams.itemId );
  guideFactory.getSingleItem($routeParams.itemId)
  .then((itemObject) => {

  $scope.selectedItem = itemObject;
  $scope.$apply();

  });
  
});