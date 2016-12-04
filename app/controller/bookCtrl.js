"use strict";

app.controller('bookCtrl' , function($scope, guideFactory){
  guideFactory.getItemList()
  .then((itemArray) => {
    $scope.items = itemArray;
    $scope.$apply();
  });
});
  // $scope.bookItems = [];

//   $scope.loadBooks = () => {

//     return new Promise((resolve, reject) => {
//       $.ajax({
//         url: '../../data/guides.json',
//         success: (result) => {
//         	console.log("result from promise",result );
//           resolve(result.guides);
//         },
//         error: (error) => {
//           console.log("something went wrong");
//           reject(error);
//         }
//       });
//     });
//   };

//   $scope.loadBooks()
//     .then((dataArrayFromPromise) => {
//     	console.log("dataArray from after loadBooks()",dataArrayFromPromise );
//       $scope.bookItems = dataArrayFromPromise;
//       $scope.$apply();
//     });

//  	// $scope.welcome = "Welcome To Our Travel Guide";
//  	// $scope.showListView = true;
// });
