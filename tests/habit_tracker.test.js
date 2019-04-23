jest.mock('../public/habit_tracker.html');
let habit = require('../public/javascripts/habit_tracker.js');

describe('Testing login function that fail', () => {
    test("creating a cookie with a username and getting it", () => {
		habit.setCookie("user", "Polina", .001);
		expect(habit.getCookie("user")).toBe("Polina");
    })

	test("creating a cookie with a theme and getting it", () => {
		habit.setCookie("theme", "1", .001);
		expect(habit.getCookie("theme")).toBe("1");
	})

	test("creating a cookie with a tracker and getting it", () => {
		habit.setCookie("tracker", "2", .001);
		expect(habit.getCookie("tracker")).toBe("2");
    })
    
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
      });

      test('take the time out of the date', () => {
        expect(habit.removeTime('2019-12-31T07:00:00.000Z')).toBeCalled;
        expect(habit.removeTime('2019-12-31T07:00:00.000Z')).toBe('Tue, 31 Dec 2019');
      });


    });

test('row is added', () => {
  
  '<table id="myTable" class="myTable">'+
      '<tr>'+
        '<th>Habit</th>'+
        '<th id=sun>Sunday</th>'+
        '<th id=mon>Monday</th>'+
        '<th id=tue>Tuesday</th>'+
        '<th id=wed>Wednesday</th>'+
        '<th id=thu>Thursday</th>'+
        '<th id=fri>Friday</th>'+
        '<th id=sat>Saturday</th>'+
      '</tr>'+
    '</table>';
    tableId= 'myTable'
    var rowInitial = document.getElementById(tableId).getElementsByTagName("tr").length;
    $('#add_button').click();
    var rowAfter = document.getElementById(tableId).getElementsByTagName("tr").length;
    expect( habit.add_row()).toBeCalled();
    rowAfterExpected = rowInitial + 1
    expect($(rows).toEqual(rowAfterExpected));
});

test('row is removed', () => {
    $('#remove_button').click();
    tableId= 'myTable'
    var rows = document.getElementById(tableId).getElementsByTagName("tr").length;

    expect( habit.removeRow()).toBeCalled();
    //expect($(rows).toEqual(3));
});

test('cell is marked', () => {
    $('#mark_button').click();
    cell= 'mark_button'
    var test = document.getElementById(cell).textContent;
    expect(habit.mark_cell()).toBeCalled();
    expect($(test).toEqual("Completed"));
});

test('change days',() =>{
  today = new Date()
  var yyyy = today.getFullYear();
  weekNum = getWeekNumber(today);
  sunday = getSundayFromWeekNum(weekNum,yyyy);
  d = sunday.getDate();
  habit.removeTime(d);
  document.body.innerHTML =
  '<table id="myTable" class="myTable">'+
      '<tr>'+
        '<th>Habit</th>'+
        '<th id=sun>Sunday</th>'+
        '<th id=mon>Monday</th>'+
        '<th id=tue>Tuesday</th>'+
        '<th id=wed>Wednesday</th>'+
        '<th id=thu>Thursday</th>'+
        '<th id=fri>Friday</th>'+
        '<th id=sat>Saturday</th>'+
      '</tr>'+
    '</table>';
  habit.changeDays();
  var expected = document.getElementById(sun).textContent;
expect($(sunday).toEqual(expected));


});