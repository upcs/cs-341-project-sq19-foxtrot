function validateLogin(user, pass) {
	if (user == 1 && pass == 1) {
		setCookie("username", user, .042);
		setCookie("theme", pass, .042);
		//set habitnum to all habitnumbers
		return true;
	}
	var passes = false;
	$.ajax({type: 'POST', url: "/users", data: { "username": user, "password": pass },success: function (data) {if (data.username != null) {
		setCookie("username", data.username, .042);
		setCookie("theme", data.theme, .042);
		setCookie("tracker", data.tracker, .042);
		setCookie("array", data.array, .042);
		passes = true;}}, dataType: "json", async: false
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

var privacy = false;
function openForm() {
	document.getElementById("termsandp").style.display = "block";
	document.getElementById("outside").style.display = "none";
}

function closeForm(term) {
	if (term == 'da') {
		privacy = true;
		document.getElementById("termsandp").style.display = "none";
		document.getElementById("outside").style.display = "block";
		return;
	}
	document.getElementById("termsandp").style.display = "none";
	document.getElementById("outside").style.display = "block";
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) 
	{
		modal.style.display = "none";
	}
}

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
			return c.substring(name.length, c.length);}}return "";
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

module.exports = {
	validateLogin,
	getUser,
	setCookie,
	getCookie,
	parseArray
};