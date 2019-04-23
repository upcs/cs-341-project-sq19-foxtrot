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

      /*test('test that mark_prevCell changes the innerHTML', () => {
        var $ = jQuery.noConflict();
        document.body.innerHTML =
          ' ';
        habit.mark_prevCell(document.body);
        expect(document.body.innerHTML.toBe('Completed'));
       })
     });*/
     test('test that open_form works', () => {
       document.body.innerHTML =
       '<div class="form-popup" id="myForm">'+
       '<form action="/action_page.php" class="form-container">'+
       ' </form>'+'</div>';
       expect(habit.openForm().toBe('true'));
      })
    });

    });

test('row is added', () => {
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
