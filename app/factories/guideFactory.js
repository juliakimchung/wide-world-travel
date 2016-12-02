"use strict";
app.factory("ItemStorage", ($http, FBCreds) => {

	let getItemList = () => {
		let items = [];

		return new Promise((resolve, reject)=> {
			$http.get(`${FBCreds.URL}/guides.json`)
			.success((itemObject)=> {
				//console.log("", );
				let itemCollection = itemObject;Object.keys(itemCollection).forEach((key)=>{
					console.log("itemCollection",itemCollection );
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

	let getSingleItem = (itemId) => {
		return new Promise((resolve, reject)=>{
			$http.get(`${FBCreds.URL}/guides/${itemId}.json`)
			.success((itemObject)=> {
				resolve(itemObject);
			})
			.error((error) => {
				reject(error);
			});
		});
	};

	return { getItemList, getSingleItem};
});

