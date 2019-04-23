//jest.mock('../public/sentence_journal_GUI.html');
//let oneSentJourn = require('../public/javascripts/first_journal_functions');
//jest.mock('../fetchCurrentUser');

test("basic test", ()=>{
  expect(2+1).toBe(3);
});
/*
test('journal is succesful', () => {
  // Set up our document body
  document.body.innerHTML =
    '<div>' +
    '  <span id="username" />' +
    '  <button id="button" />' +
    '</div>';

  // Tell the fetchCurrentUser mock function to automatically invoke
  // its callback with some data
  oneSentJourn.validateForm();

  // Use jquery to emulate a click on our button
  $('#button').click();

  // Assert that the fetchCurrentUser function was called, and that the
  // #username span's inner text was updated as we'd expect it to.
  expect(  oneSentJourn.validateForm()).toBeCalled();
  expect($('#username').text()).toEqual('Johnny Cash - Logged In');
});


// test('Check if form is over character count', () =>{
//   expect(validateForm(length > 100).toBe(100))
//   return ("Form has too many characters in it.")
// })

// test('check if form is empty', ()=> {
// 	expect(validateForm(null).toBe(null))
// 	return ("Text Box is empty.") 
// })

// test('check if journal has been submitted', () => {
//   $("#journalSubmitBtn").on('click', validateForm);

//   expect (oneSentJourn.validateForm()).toBeCalled();
//   return ("Database has been posted to.")
// })

test('Check if form is over character count', () =>{
  var entry = "Welp here we asre rtyping really fast while not checking the things for tspelling because this is suppsoe to be ober 100 chasracter and i just cant think about spelling at the moment as I am streeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeesed";
  document.forms["journalForm"]["fjournal"].value = entry; 
  validateForm();
  expect((document.forms["journalForm"]["fjournal"].value.length).toBeGreaterThanOrEqual(100));
  return ("Form has too many characters in it.")
})

test("Check if form is empty", () => {
  $('#journalSubmitBtn').on('click', validateForm);
  const result = oneSentJourn.validateForm();
  expect(result).toBe(null);
  return ("Text Box is empty")
})

test('check if journal has been submitted', () => {
    $("#journalSubmitBtn").on('click', validateForm);
    expect (oneSentJourn.validateForm()).toBeCalled();
    return ("Database has been posted to.")
  })


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