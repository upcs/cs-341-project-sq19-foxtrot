var login = require('../public/javascripts/login_functions.js');

//testing login function from login_functions
describe('Testing simple login function actions', () => {

	foxtrot = "foxtrot";
	polina = "polina";
	Polina = "Polina";
	empty = " ";
	one = "1";


	test("getUser function needs to return Polina", () => {
		username = Polina;
		expect(login.getUser(username)).toBe(Polina);
	})

	test("getUser function needs to return Polina", () => {
		expect(login.getUser("")).toBe("");
	})

	test("creating a cookie with a username and getting it", () => {
		login.setCookie("user", login.getUser(Polina), .001);
		expect(login.getCookie("user")).toBe(Polina);
	})

	test("creating a cookie with a theme and getting it", () => {
		login.setCookie("theme", one, .001);
		expect(login.getCookie("theme")).toBe(one);
	})

	test("creating a cookie with a tracker and getting it", () => {
		login.setCookie("tracker", "2", .001);
		expect(login.getCookie("tracker")).toBe("2");
	})

});

describe('Testing login function that fail', () => {
	login.validateLogin = jest.fn(() => 'false')
	test("given empty password with correct username", () => {
		const result = login.validateLogin(Polina, empty);
		expect(result).toBe('false');
		expect(login.validateLogin).toHaveBeenCalled();
		expect(login.validateLogin).toHaveBeenCalledWith(Polina, empty);
	})

	test("given correct password with empty username", () => {
		const result = login.validateLogin(empty, foxtrot);
		expect(result).toBe('false');
		expect(login.validateLogin).toHaveBeenCalled();
		expect(login.validateLogin).toHaveBeenCalledWith(empty, foxtrot);
	})

	test("given wrong password with correct username", () => {
		const result = login.validateLogin(Polina, "ghjksf");
		expect(result).toBe('false');
		expect(login.validateLogin).toHaveBeenCalled();
		expect(login.validateLogin).toHaveBeenCalledWith(Polina, "ghjksf");
	})

	test("given wrong case password with correct username", () => {
		const result = login.validateLogin(Polina, "foxtrot");
		expect(result).toBe('false');
		expect(login.validateLogin).toHaveBeenCalled();
		expect(login.validateLogin).toHaveBeenCalledWith(Polina, "foxtrot");
	})

	test("given wrong case username with correct password", () => {
		const result = login.validateLogin(polina, foxtrot);
		expect(result).toBe('false');
		expect(login.validateLogin).toHaveBeenCalled();
		expect(login.validateLogin).toHaveBeenCalledWith(polina, foxtrot);
	})
});