let habitTracker = require('./Habit Tracker.js');
let journalFunct = require('./journal_functions.js');

//testing btnClick function from Habit Tracker.js
test('if button on habit tracker is clicked', () => {
    expect(habitTracker.btnClick().toBe(1));
})
