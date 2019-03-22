/*var myObj = {
	"data": [
		{
			"Username": "Sarah",
			"Password": "foxtrot"
		},
		{
			"Username": "Joanna",
			"Password": "foxtrot"
		},
		{
			"Username": "Polina",
			"Password": "foxtrot"
		},
		{
			"Username": "Ashika",
			"Password": "foxtrot"
		},
		{
			"Username": "1",
			"Password": "1"
		}
	]
}*/

//checks to see if user has an account
function validateLogin(username, password) {
	console.log("Here is u = " + username);
	console.log("Here is p = " + password);
	$.post(
		"/users",
		null,
		function (data) {
			console.log("data arrived");

			for (i = 0; i <= data.length; i++) {
				if (data[i].Username == username && data[i].Password == password) {
					console.log("true");
					return true;
				}
				else if (username == 1 && password == 1) {
					console.log("true");
					return true;
				}
			}
			alert("Invalid Login");
			console.log("false");
			return false;

		}, "json");
};
//added for tests
/*
module.exports = {
	validateLogin
};*/