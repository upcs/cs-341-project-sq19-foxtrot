//hardcoded data until database is up and running
var myObj = {
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
		}
	]
}

//checks to see if user has an account
function validateLogin(username, password) {
	for (i = 0; i <= 3; i++) {
		if (myObj.data[i]["Username"] == username && myObj.data[i]["Password"] == password) {
			return true;
		}
	}
	return false;
}

//added for tests
module.exports = {
	validateLogin
};