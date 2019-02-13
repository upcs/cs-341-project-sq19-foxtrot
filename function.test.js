let habitTracker = require('Habit Tracker.js');
let journalFunct = require('journal_functions.js');

//testing btnClick function from Habit Tracker.js
test('if button on habit tracker is clicked', () => {
    expect(habitTracker.btnClick().toBe(1));
})

//testing myFunction function from Habit Tracker.js
var x = document.getElementById("mytable").getElementsByTagName("td");
test('if connected function to btnClick works', () => {
    expect(habitTracker.myFunction(x).toBe(1));
})

//testing validateForm from journal_functions.js
//checking if function correctly identifies an empty journal
document.forms["journalForm"]["fjournal"].value = "    ";
test('Check if forms say true when empty', () => {
    expect(journalFunct.validateForm().toBe(false));
})

//testing validateForm from journal_functions.js
//checking if function correctly identifies a non-empty journal
document.forms["journalForm"]["fjournal"].value == "The journal is not empty";
test('Check if forms say true when empty', () => {
    expect(journalFunct.validateForm().toBe(true));
})
