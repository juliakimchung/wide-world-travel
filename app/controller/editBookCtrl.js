"use strict";
app.controller("editBookCtrl", function($scope, guideFactory, $routeParams, $location){
	$scope.title = "Edit Book";
	$scope.btnText = "Edit";
	$scope.editedBook = {
			// title: "", 
			// type: "",
			// price:"",
			// uid: ""
	};
guideFactory.getSingleItem($routeParams.bookId)
	.then((newData) => {
		$scope.editedBook = newData;
	});
	$scope.editNewBook = function(){
		guideFactory.updateSingleBook($routeParams.bookId, $scope.editedBook) 
			.then((newData) => {
				console.log("newData",newData );
				$location.url("/books/list");
			 $scope.$apply();
		});
	};
	
});