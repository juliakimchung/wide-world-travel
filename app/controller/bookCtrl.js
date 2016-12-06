"use strict";

app.controller('bookCtrl' , function($scope, guideFactory, searchTermData){
	$scope.searchText = searchTermData;
  guideFactory.getItemList()
  .then((itemArray) => {
    $scope.items = itemArray;
    $scope.$apply();
  });
  $scope.remove = (bookId)=> {
  guideFactory.deleteSingleItem(bookId)
  	.then((response) => {
  		guideFactory.getItemList()
  		.then((itemArray) => {
  		$scope.items = itemArray;
  		$scope.$apply();
  	});
  	});
 	};
 	});	
  
