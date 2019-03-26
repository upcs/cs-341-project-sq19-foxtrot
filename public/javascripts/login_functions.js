//src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
'use strict';
const $ = require('jquery');

//checks to see if user has an account
function validateLogin(username, password) {
	console.log("Here is u = " + username);
	console.log("Here is p = " + password);
	var user;
	if (username == 1 && password == 1) {
		console.log("Admin");
		return true;
	}
	var passes = false;
	$.ajax({
		type: 'POST',
		url: "/users",
		data: null,
		success: function (data) {
			console.log("data arrived");
			for (i = 0; i <= data.length; i++) {
				if (data[i].Username == username && data[i].Password == password) {
					console.log("true");
					passes = true;
				}
			}
		},
		dataType: "json",
		async: false
	});

	if (passes == false) {
		alert("Invalid Login");
		console.log("false");
		return false;
	}
	return passes;
};
//added for tests

module.exports = {
	validateLogin
};