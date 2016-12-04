"use strict";
app.factory("guideFactory", ($http, FBCreds) => {

	let getItemList = () => {
		let items = [];

		return new Promise((resolve, reject)=> {
			$http.get(`${FBCreds.URL}/guides.json`)
			.success((itemObject)=> {
				let itemCollection = itemObject;
				Object.keys(itemCollection).forEach((key)=>{
					//console.log("itemCollection",itemObject );
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

	return { getItemList, getSingleItem};
});

