"use strict";
let app = angular.module("TravelGuideApp", ["ngRoute"]);
// app.constant('FBCreds','https://world-wide-travel-a1993.firebaseio.com/');
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
		templateUrl: 'partials/book-list.html',
		controller: 'bookCtrl', 
	    resolve: {isAuth}
	})
	.when('/books/new', {
		templateUrl: 'partials/book-form.html',
		controller: 'addBookCtrl',
	    resolve: {isAuth}
	})
	.when('/books/:bookId', {
		templateUrl: 'partials/book-details.html',
		controller: 'singleViewCtrl',
	    resolve: {isAuth}
	})
	.otherwise('/books/list');
});

app.run(($location, FBCreds) => {
	let creds = FBCreds;
	console.log("creds", creds.key);
	let authConfig = {

		apiKey:creds.key, 
		authDomain:creds.authDomain
	};
	firebase.initializeApp(authConfig);
});

