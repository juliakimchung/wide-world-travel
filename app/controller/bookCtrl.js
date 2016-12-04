"use strict";

app.controller('bookCtrl' , function($scope, guideFactory){
  guideFactory.getItemList()
  .then((itemArray) => {
    $scope.items = itemArray;
    $scope.$apply();
  });
});