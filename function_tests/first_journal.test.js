let first_journal = require('../public/javascripts/first_journal_functions.js');

x = " ";
test("test: space passes", () => {
    expect(first_journal.validateForm(x)).toBe(true);
});

y = "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
test("test: 100 characters inserted passes", () => {
    expect(first_journal.validateForm(y)).toBe(true);
});
z = "10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
test("test: more than 100 characters inserted fails", () => {
    expect(first_journal.validateForm(z)).toBe(false);
});
h = "hello-world,hi. ";
test("test: - and , and . characters passes", () => {
    expect(first_journal.validateForm(h)).toBe(true);
});
i = "Life is going so great and wonderful ";
test("test: submition works", () => {
    expect(first_journal.validateForm(i)).toBe(true);
});
