(function() {
	//Log the input object
	console.log(input);
	if(input.collectionName === "presidents"){
			data.prop1 = "Washington";
			data.prop2 = "Lincoln";
			data.prop3 = "Reagan";
	} else {
		//If server.update() was run, then take the values from the input object
		//If server.refresh() was run, set the values back to the default
			data.prop1 = input.prop1 || "Apple";
			data.prop2 = input.prop2 || "Orange";
			data.prop3 = input.prop3 || "Pineapple";
	}
	//Log the data object being sent to the client script
	console.log(data);
})();
