let first_journal = require('../public/javascripts/first_journal_functions.js');
//Object.defineProperty(global, 'document.forms["journalForm"]["fjournal"].value = ""', {});

Object.defineProperty(global, 'document.forms.innerHTML = "<form name="journalForms"><textArea name="fjournal"></textArea> </form>', {});
test("test: nothing is inserted fails", () => {
    expect(first_journal.validateForm().toBe(false));
});

Object.defineProperty(global, 'document.forms["journalForm"]["fjournal"].value = "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"', {});
test("test: 100 characters inserted passes", () => {
    expect(first_journal.validateForm().toBe(false));
});

Object.defineProperty(global, 'document.forms["journalForm"]["fjournal"].value = "10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"', {});
test("test: more than 100 characters inserted fails", () => {
    expect(first_journal.validateForm().toBe(false));
});

Object.defineProperty(global, 'document.forms["journalForm"]["fjournal"].value = "hello-world,hi. "', {});
test("test: - and , and . characters passes", () => {
    expect(first_journal.validateForm().toBe(true));
});

Object.defineProperty(global, 'document.forms["journalForm"]["fjournal"].value = "Life is going so great and wonderful "', {});
test("test: submition works", () => {
    expect(first_journal.validateForm().toBe(true));
});
