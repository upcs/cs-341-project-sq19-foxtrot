var login = require('../public/javascripts/login_functions.js');

//testing login function from login_functions

describe('Testing login function that pass', () => {
    foxtrot = "foxtrot";
	polina = "polina";
	Polina = "Polina";
	empty = " ";
    one = "1";
    
	login.validateLogin = jest.fn(() => 'true')
	test("given admin login", () => {
		const result = login.validateLogin(one, one);
		expect(result).toBe('true');
		expect(login.validateLogin).toHaveBeenCalled();
		expect(login.validateLogin).toHaveBeenCalledWith(one, one);
	})

	test("given admin login", () => {
		const result = login.validateLogin(Polina, foxtrot);
		expect(result).toBe('true');
		expect(login.validateLogin).toHaveBeenCalled();
		expect(login.validateLogin).toHaveBeenCalledWith(Polina, foxtrot);
	})
});