
function validateLogin(user, pass) {

	if (user == 1 && pass == 1) {
		console.log("Admin");
		setCookie("username", user, .042);
		setCookie("theme", pass, .042);
		//set habitnum to all habitnumbers
		return true;
	}

	var passes = false;
	$.ajax({
		type: 'POST',
		url: "/users",
		data: {
			"username": user,
			"password": pass
		},
		success: function (data) {
			if (data.username != null) {
				console.log("username = " + data.username);
				console.log("theme = " + data.theme);
				console.log("tracker = " + data.tracker);
				console.log("array =" + data.array);
				var array = parseArray(data.array);
				setCookie("username", data.username, .042);
				setCookie("theme", data.theme, .042);
				setCookie("tracker", data.tracker, .042);
				setCookie("array", array, .042);
				passes = true;
			}
		},
		dataType: "json",
		async: false
	});

	if (passes == false) {
		alert("Invalid Login");
		return false;
	}

	var username = getCookie("username");
	if (username != "") {
		alert("Welcome " + username);
		return passes;
	}
	return passes;
};

function parseArray(string) {
  var array = string.split("|");
  console.log("parsed array " + array);
	return array;
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

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
	getUser,
	setCookie,
	getCookie
};
