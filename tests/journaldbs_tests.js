jest.mock('../public/habit_tracker_prev.html');
let journal = require('../public/javascripts/journal_db.js');


test('add day function works with adding one,'()=>{
  expect( journal.displayData().toBe($("#preJournal").append(jourVar)));
});

