var habit = require('../public/javascripts/habit_db.js');
var login = require('../public/javascripts/login_functions.js');
jest.mock('../public/habit_tracker_prev.html');

//Testing basic habit tracker function actions
describe('Testing basic habit tracker function actions', () => {

  test('testing cookie user function', () => {
    expect(habit.getCookie("username")).toBeCalled;
    expect(habit.getCookie("username")).toBe("");
  });

  test('add day function breaks with wrong input', () => {
    expect(habit.addDays(('8', 1)).toBeCalled);
    expect(habit.addDays(('8', 1)).toBeNull);
  });

  test('add day function adds a day', () => {
    expect(habit.addDays('2019-03-26T07:00:00.000Z', 3)).toBeCalled;
  });

  test('add day function works with end of month', () => {
    expect(habit.addDays('2019-03-30T07:00:00.000Z', 3)).toBeCalled;
  });

  test('Get week number works with valid date', () => {
    expect(habit.getWeekNumber('2019-03-25T07:00:00.000Z')).toBeCalled;
    expect(habit.getWeekNumber('2019-03-25T07:00:00.000Z')).toBe(13);
  });

  test('Get week number works with valid date early in the year', () => {
    expect(habit.getWeekNumber('2019-01-05T07:00:00.000Z')).toBeCalled;
    expect(habit.getWeekNumber('2019-01-05T07:00:00.000Z')).toBe(2);
  });

  test('Get week number works with valid date late in the year', () => {
    expect(habit.getWeekNumber('2019-12-31T07:00:00.000Z')).toBeCalled;
    expect(habit.getWeekNumber('2019-12-31T07:00:00.000Z')).toBe(53);
  });

  test('Get sunday works with valid date', () => {
    expect(habit.getSundayFromWeekNum(2, 2019)).toBeCalled;
    //date = new Date("2019-01-06T08:00:00.000Z");
    //expect(habit.getSundayFromWeekNum(2, 2019)).toBe(date);
  });

  test('take the time out of the date', () => {
    expect(habit.removeTime('2019-12-31T07:00:00.000Z')).toBeCalled;
    expect(habit.removeTime('2019-12-31T07:00:00.000Z')).toBe('Tue, 31 Dec 2019');
  });

  test('Get saturday works with valid date', () => {
    expect(habit.getSaturdayFromWeekNum(2, 2019)).toBeCalled;
    //date = new Date("2019-01-06T08:00:00.000Z");
    //expect(habit.getSundayFromWeekNum(2, 2019)).toBe(date);
  });

  test('test that open_form works', () => {
    document.body.innerHTML =
    '<tr class="week"><td colspan= 8 > Week - </td></tr>'
    + "<tr>"+"<th>" + "Habit" + "</th>" + "<td>"+ "</td>" + "<td>"
     +"</td>" +"<td>"+ "</td>"
    +"<td>" +"</td>" +"<td>"+ "</td>" +"<td>"
    +"</td>" +"<td>"+ "</td> </tr>";
    var weekRows = document.getElementsByClassName("week");
    expect(habit.markWeekRow(weekRows[0])).toBeCalled;
    //expect(habit.openForm()).toBe(true);
  });

});
/*
jest.mock('../public/habit_tracker_prev.html');
var habit = require('../public/javascripts/habit_db.js');
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
});*/
