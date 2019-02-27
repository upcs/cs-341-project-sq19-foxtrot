let extended_journal = require('../public/javascripts/extended_journal_functions.js');

Object.defineProperty(global, 'document.forms["journalForm"]["fjournal"].value = ""', {});
test("test: nothing is inserted fails", () => {
    expect(extended_journal.validateForm().toBe(false));
});

Object.defineProperty(global, 'document.forms["journalForm"]["fjournal"].value = "Life is going so great and wonderful "', {});
test("test: submition works", () => {
    expect(extended_journal.validateForm().toBe(true));
});

Object.defineProperty(global, 'document.forms["journalForm"]["fjournal"].value = "  "', {});
test("test: submition works", () => {
    expect(extended_journal.validateForm().toBe(true));
});