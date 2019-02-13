

function getUser(firstName) {
	if (firstName !== null) {
		console.log(`getting User from first Name: ${firstName}`);
		return firstName;
	} else {
		return null;
	}
}

module.exports = {
	getUser
};
