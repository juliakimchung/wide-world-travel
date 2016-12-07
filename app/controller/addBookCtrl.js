"use strict";
app.controller("addBookCtrl", function($scope, guideFactory, $location, AuthFactory) {
	$scope.title = "Add a new book";
  	$scope.btnText = "Save new book";
  	$scope.newBook = {
			title: "", 
			type: "",
			price:"",
			uid: ""
	};

	$scope.addNewBook = function() {
		guideFactory.postNewBook($scope.newBook)
		.then((response)=> {
		console.log("you clicked on the new item",$scope.newBook );
			$location.url ("/books/list");
			$scope.$apply();
		});
	};
});


