var login = require('../public/javascripts/login_functions.js');

//testing login function from login_functions

test("parse array containment test", () => {
	login.parseArray = jest.fn(() => 'Polina')
	var polina = "Polina";
	expect(login.parseArray(polina)).toContain(polina);
})

test("parse array", () => {
	login.parseArray = jest.fn(() => 'polina')
	var polina = "polina";
	expect(login.parseArray(polina)).toContain(polina);
})

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

describe('Testing login function that pass', () => {
	test("admin login works", () => {
		const result = login.validateLogin(one, one);
		expect(result).toBe('true');
		expect(login.validateLogin).toHaveBeenCalled();
		expect(login.validateLogin).toHaveBeenCalledWith(one, one);
		expect(login.validateLogin(one,one)).toBeTruthy;
	})

	test("admin login works correctly with cookies", () => {
		login.validateLogin(1,1);
		expect(login.getCookie("username")).toBe("");
	})
	test("admin login works correctly with cookies", () => {
		expect(login.validateLogin("",1)).toBeFalsy;
		expect(login.validateLogin(null,1)).toBeFalsy;
		expect(login.getCookie("username")).toBe("");
	})
});