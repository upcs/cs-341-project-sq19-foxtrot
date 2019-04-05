/*let extended_journal = require('../public/javascripts/extended_journal_functions.js');

test("Getting the day name", () => {
    var now = new Date();
    expect(extended_journal.now.getDayName()).toBe('Monday');
});
*/

test("basic test", ()=>{
    expect(2+1).toBe(3);
});

/*
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
*/

jest.mock('../public/extended_journal.html');
let extJournal = require('../public/javascripts/extended_journal_functions');
//jest.mock('../fetchCurrentUser');

test('journal is succesful', () => {
  // Set up our document body
  document.body.innerHTML =
    '<div>' +
    '  <span id="username" />' +
    '  <button id="button" />' +
    '</div>';

  // Tell the fetchCurrentUser mock function to automatically invoke
  // its callback with some data
  extJournal.validateForm();

  // Use jquery to emulate a click on our button
  $('#button').click();

  // Assert that the fetchCurrentUser function was called, and that the
  // #username span's inner text was updated as we'd expect it to.
  expect(  extJournal.validateForm()).toBeCalled();
  expect($('#username').text()).toEqual('Johnny Cash - Logged In');
});

test('Check if form is over character count', () =>{
  expect(extJournal.validateForm(length > 100).toBe(100))
  return ("Form has too many characters in it.")
})

test('check if form is empty', ()=> {
	expect(extJournal.validateForm(null).toBe(null))
	return ("Text Box is empty.") 
})

// test('check if journal has been submitted', () => {
//   $("#journalSubmitBtn").on('click', validateForm);

//   expect (oneSentJourn.validateForm()).toBeCalled();
//   return ("Database has been posted to.")
// })

/*let first_journal = require('../public/javascripts/first_journal_functions.js');
x = "";
test("test: nothing is inserted fails", () => {
expect(first_journal.validateForm(x)).toBe(false);
});
y="1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
test("test: 100 characters inserted passes", () => {
expect(first_journal.validateForm(y)).toBe(true);
});
z = "10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
test("test: more than 100 characters inserted fails", () => {
expect(first_journal.validateForm(z)).toBe(false);
});
h="hello-world,hi. ";
test("test: - and , and . characters passes", () => {
expect(first_journal.validateForm(h)).toBe(true);
});
i= "Life is going so great and wonderful ";
test("test: submition works", () => {
expect(first_journal.validateForm(i)).toBe(true);
});
*/