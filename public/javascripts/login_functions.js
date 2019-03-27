src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
//src="https://code.jquery.com/jquery-3.3.1.js";

 //var $ = jQuery.noConflict();
//checks to see if user has an account

var user = "";

function validateLogin(username, password) {
	user = username;
	console.log(user);

	//var journ = $("#journalbtn").innerHTML;
	//console.log(journ);
	//var x=document.getElementById('journalbtn');
	//console.log(x.innerHTML);
	//document.write(username);


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
		data: {user:username},
		success: function (data) {
			console.log("data arrived");
			for (i = 0; i <= data.length; i++) {
				if (data[i].Username == username && data[i].Password == password) {
					console.log("true");
					passes = true;
					//var userHtml = "<h2>" + username + "</h2>";
					//$("#journalbtn").append(userHtml);
					//console.log("appended to journal button");
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

function getUser()
{
	console.log("getUser: " + user);
	return user;
}
//added for tests

//module.exports.getUser = getUser; // export your functuion

module.exports = {
	validateLogin,
	getUser
};