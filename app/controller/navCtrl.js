"use strict";

app.controller('navCtrl', function($scope, searchTermData, AuthFactory){
	
	// console.log("isAuth", isAuth());
	
	$scope.searchText = searchTermData;
	$scope.navItems = [
		{
			name: "Logout",
			url: "#/login"
		},
		{
			name: "Login / Register",
			url: "#/login"
		},
		{
			name: "All Books",
			url: "#/books/list"
		}, 
		{
			name: "Add books",
			url: "#/books/new"
		}
	];

});


