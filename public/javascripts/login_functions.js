src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
//src="https://code.jquery.com/jquery-3.3.1.js";

//var $ = jQuery.noConflict();
//checks to see if user has an account

var user = "";

function validateLogin(user, pass) {


	//var journ = $("#journalbtn").innerHTML;
	//console.log(journ);
	//var x=document.getElementById('journalbtn');
	//console.log(x.innerHTML);
	//document.write(username);


	console.log("Here is u = " + user);
	console.log("Here is p = " + pass);
	var user;
	if (user == 1 && pass == 1) {
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
				if (data[i].username == user && data[i].password == pass) {
					console.log("true"); "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

					setCookie("username", data[i].username, .042);
					setCookie("theme", data[i].theme, .042);
					//document.cookie1 = "username=" + data[i].username + ";";
					//document.cookie2 = "theme=" + data[i].theme + ";";
					//console.log("cookie1: " + document.cookie1);
					//console.log("cookie2: " + document.cookie2);
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

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getUser(user) {
	console.log("getUser: " + user);
	return user;
}
//added for tests

//module.exports.getUser = getUser; // export your functuion

module.exports = {
	validateLogin,
	getUser
};