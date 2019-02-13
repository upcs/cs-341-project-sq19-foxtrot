let habitTracker = require('./Habit Tracker.js');
let journalFunct = require('./journal_functions.js');
let login = require('./login_functions.js');

//testing btnClick function from login_functions
test('getting name', () => {
	expect(login.getUser('Polina')).toBe('Polina');
});

//testing btnClick function from login_functions
test('getting name', () => {
	expect(login.getUser(null)).toBe(null);
});
