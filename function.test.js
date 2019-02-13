let login = require('./login_functions.js');

//testing getUser function from login_functions
test('getting name', () => {
	expect(login.getUser('Polina')).toBe('Polina');
});

//testing getUser function from login_functions
test('getting name', () => {
	expect(login.getUser('Sarah')).toBe('Sarah');
});

//testing getUser function from login_functions
test('getting name', () => {
	expect(login.getUser(null)).toBe(null);
});
