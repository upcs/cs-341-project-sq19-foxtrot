function validateLogin() {

	var username = document.myform.uname.value;
	var password = document.myform.psw.value;
	for (i = 0; i <= myObj.data.length; i++) {
		if (myObj.data[i]["Username"] == username && myObj.data[i]["Password"] == password) {
			return true;
		}
	}
	document.myform.uname.value = "";
	document.myform.psw.value = "";
	return false;
}

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

module.exports = {
	validateLogin
};
