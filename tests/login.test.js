var login = require('../public/javascripts/login_functions.js');
//src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
//src="https://code.jquery.com/jquery-3.3.1.js";
//src="/lib/jquery.min.js";
//src="/lib/jquery.plugin.js";
//var $ = jQuery.noConflict();

//testing login function from login_functions
describe('Testing login function ', () => {

	foxtrot = "foxtrot";
	polina = "polina";
	Polina = "Polina";
	empty = " ";


	test("admin login entered", () => {
		expect(login.validateLogin(1, 1)).toBe(true);
	});

	test("given empty password with correct username", () => {
		expect(login.validateLogin(Polina, empty)).toBe(false);
	});
/*
	test("given empty password", () => {
		expect(login.validateLogin(foxtrot, empty)).toBe(false);
	});

	test("given empty username", () => {
		expect(login.validateLogin(empty, foxtrot)).toBe(false);
	});

	test("given wrong password", () => {
		expect(login.validateLogin(foxtrot, foxtrot)).toBe(false);
	});
	test("given wrong case username", () => {
		expect(login.validateLogin(polina, foxtrot)).toBe(false);
	});

	test("given wrong case password", () => {
		expect(login.validateLogin(Polina, Foxtrot)).toBe(false);
	});

	test("given correct login info", () => {
		expect(login.validateLogin(Polina, foxtrot)).toBe(true);
	});*/
});
