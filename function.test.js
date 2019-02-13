let habitTracker = require('./Habit Tracker.js');
let journalFunct = require('./journal_functions.js');

//testing btnClick function from Habit Tracker.js
test('if button on habit tracker is clicked', () => {
    expect(habitTracker.btnClick().toBe(1));
})

//testing validateForm from journal_functions.js
//checking if function correctly identifies an empty journal
test('Check if forms say true when empty', () => {
    expect(journalFunct.validateForm().toBe(false));
})
