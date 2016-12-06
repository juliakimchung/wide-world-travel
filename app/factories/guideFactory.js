"use strict";
app.factory("guideFactory", ($http, FBCreds) => {
console.log("FBCreds", FBCreds);
	let getItemList = () => {
		let items = [];

		return new Promise((resolve, reject)=> {
			$http.get(`${FBCreds.URL}/guides.json`)
			.success((itemObject)=> {
				let itemCollection = itemObject;
				Object.keys(itemCollection).forEach((key)=>{
					console.log("itemCollection",itemObject );
					itemCollection[key].id = key;
					items.push(itemCollection[key]);
				});
				resolve(items);
			})
			.error((error)=> {
				reject(error);
			});
		});
	};

	let deleteSingleItem = (bookId) => {
		return new Promise ((resolve, reject) => {
			$http.delete(`${FBCreds.URL}/guides/${bookId}.json`)
			.success((itemObject)=> {
				console.log("itemObject after delete promise", itemObject);
			resolve(itemObject)
		})
			.error((error) => {
				reject(error);
			});
		});
	};
	let getSingleItem = (bookId) => {
		return new Promise((resolve, reject)=>{
			$http.get(`${FBCreds.URL}/guides/${bookId}.json`)
			.success((itemObject)=> {
				resolve(itemObject);
				console.log("itemObject after promise",itemObject );
			})
			.error((error) => {
				reject(error);
			});
		});
	};

let postNewBook = (bookId) => {
		return new Promise((resolve, reject)=>{
			$http.post(`${FBCreds.URL}/guides.json`, angular.toJson(bookId))
			.success((itemObject)=> {
				resolve(itemObject);
				console.log("itemObject after promise",itemObject );
			})
			.error((error) => {
				reject(error);
			});
		});
	};

console.log("FBCreds", FBCreds);
	return { getItemList, getSingleItem, deleteSingleItem, postNewBook};
});
