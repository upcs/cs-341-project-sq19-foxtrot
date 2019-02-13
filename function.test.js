let login = require('./login_functions.js');

//testing btnClick function from login_functions
test('getting name', () => {
	expect(login.getUser('Polina')).toBe('Polina');
});

//testing btnClick function from login_functions
test('getting name', () => {
	expect(login.getUser('Sarah')).toBe('Sarah');
});

//testing btnClick function from login_functions
test('getting name', () => {
	expect(login.getUser(null)).toBe(null);
});
