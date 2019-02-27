
let login = require('./public/javascripts/login_functions.js');
let habit_tracker = require('./public/javascripts/habit_tracker.js');

//testing login function from login_functions
describe('Testing login function ', () => {
	test("given empty password", () => {
		expect(login.validateLogin("foxtrot", " ")).toBe(false);
	});

	test("given empty username", () => {
		expect(login.validateLogin(" ", "foxtrot")).toBe(false);
	});

	test("given wrong password", () => {
		expect(login.validateLogin("foxtrot", "foxtrot")).toBe(false);
	});
	test("given wrong case username", () => {
		expect(login.validateLogin("polina", "foxtrot")).toBe(false);
	});

	test("given wrong case password", () => {
		expect(login.validateLogin("Polina", "Foxtrot")).toBe(false);
	});

	test("given correct login info", () => {
		expect(login.validateLogin("Polina", "foxtrot")).toBe(true);
	});
});

describe('Testing habit tracker functions',() => {

});
