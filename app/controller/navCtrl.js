"use strict";
app.controller("navCtrl", function($scope, searchTermData){
	$scope.searchText = searchTermData;
	$scope.navItems = [
	{	name: 'Login/Register',
		url: '#/login'
	},
	{
		name: 'Logout',
		url: '#/logout'
	},
	{
		name: "All Items",
		url: "#/books/list"
	},
	{
		name: "Add Items",
		url: "#/books/new"
	}
	];
});