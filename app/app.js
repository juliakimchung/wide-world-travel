"use strict";
let app = angular.module("TravelGuideApp", ["ngRoute"]);

app.config(function($routeProvider){

let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
	AuthFactory.isAuthenticated()
	.then((userExists) => {
		if(userExists){
			resolve();
		}else{
			reject();
		}
	});
});


	$routeProvider
	.when("/", {
        templateUrl: "partials/login.html",
        controller: "LoginCtrl"
    })

	.when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'LoginCtrl'
	})
	.when('/books/list',{
		templateUrl: 'partials/bookList.html',
		controller: 'bookCtrl', 
		resolve: {isAuth}
	})
	.when('/books/new', {
		templateUrl: 'partials/book-form.html',
		controller: 'itemNewCtrl',
		resolve: {isAuth}
	})
	.when('/books/:itemId', {
		templateUrl: 'partials/book-details.html',
		controller: 'singleViewCtrl',
		resolve: {isAuth}
	})
	.otherwise('/book/bookList');
});

app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {

		apiKey:creds.key, 
		authDomain:creds.authDomain
	};
	firebase.initializeApp(authConfig);
});