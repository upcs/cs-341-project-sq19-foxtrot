let habitTracker = require('./Habit Tracker.js');
let journalFunct = require('./journal_functions.js');
let login = require('./login_functions.js');

//testing btnClick function from login_functions
test('getting name', () => {
	expect(searchForm.getUser('Polina')).toBe('Polina');
});

//testing btnClick function from login_functions
test('getting name', () => {
	expect(searchForm.getUser(null)).toBe(null);
});
