"use strict";
app.controller ('singleViewCtrl', function($scope, guideFactory, $routeParams){
  //$scope.welcome = "Let's have some fun!";
  $scope.selectedItem ={};
  console.log("routeParams PMF", $routeParams.bookId );
  guideFactory.getSingleItem($routeParams.bookId)
  .then((itemObject) => {

  $scope.selectedItem = itemObject;
  $scope.$apply();

  });

});