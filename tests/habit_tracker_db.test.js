jest.mock('../public/habit_tracker_prev.html');
let habit = require('../public/javascripts/habit_db.js');





test('add day function works with adding one',()=>{
  expect( habit.addDays('2019-03-25T07:00:00.000Z', 1).toBe(new Date('2019-03-26T07:00:00.000Z')));
});

test('add day function works with end of month',()=>{
  expect( habit.addDays('2019-03-30T07:00:00.000Z', 3).toBe(new Date('2019-04-02T07:00:00.000Z')));
});

test('Get week number works with valid date',()=>{
  expect( habit.getWeekNumber('2019-03-25T07:00:00.000Z').toBe(13));
});

test('Get week number works with valid date early in the year',()=>{
  expect( habit.getWeekNumber('2019-01-05T07:00:00.000Z').toBe(1));
});

test('Get week number works with valid date late in the year',()=>{
  expect( habit.getWeekNumber('2019-12-31T07:00:00.000Z').toBe(53));
});

test('Get sunday works with valid date',()=>{
  expect( habit.getSundayFromWeekNum(2,2019).toBe(new Date('2019-01-06T07:00:00.000Z')));
});
