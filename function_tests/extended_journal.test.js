let extended_journal = require('../public/javascripts/extended_journal_functions.js');
x = "";
test("test: nothing is inserted fails", () => {
expect(extended_journal.validateForm(x)).toBe(false);
});
y="Here is my text/ writing for the day";
test("test: submition works", () => {
expect(extended_journal.validateForm(y)).toBe(true);
});
z = " ";
test("test: submition works", () => {
expect(extended_journal.validateForm(z)).toBe(true);
});
