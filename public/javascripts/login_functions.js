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

function validateLogin(username, password) {
	//var username = document.myform.uname.value;
	//var password = document.myform.psw.value;
	for (i = 0; i <= 3; i++) {
		if (myObj.data[i]["Username"] == username && myObj.data[i]["Password"] == password) {
			return true;
		}
	}
	return false;
}

module.exports = {
	validateLogin
};

