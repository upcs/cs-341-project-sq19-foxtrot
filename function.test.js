let login = require('./javascripts/login_functions.js');

//testing login function from login_functions

document.myform.psw.value = "foxtrot";
document.myform.uname.value = "";
test("given empty username", () => {
	expect(validateLogin()).toBe(false);
});

document.myform.psw.value = "";
document.myform.uname.value = "foxtrot";
test("given empty password", () => {
	expect(validateLogin()).toBe(false);
});

document.myform.psw.value = "foxtrot";
document.myform.uname.value = "foxtrot";
test("given wrong password", () => {
	expect(validateLogin()).toBe(false);
});

document.myform.psw.value = "polina";
document.myform.uname.value = "foxtrot";
test("given wrong case username", () => {
	expect(validateLogin()).toBe(false);
});

document.myform.psw.value = "Polina";
document.myform.uname.value = "Foxtrot";
test("given wrong case password", () => {
	expect(validateLogin()).toBe(false);
});

document.myform.psw.value = "Polina";
document.myform.uname.value = "foxtrot";
test("given correct login info", () => {
	expect(validateLogin()).toBe(true);
});
