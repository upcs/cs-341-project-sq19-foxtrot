jest.mock('../public/habit_tracker.html');
let habit = require('../public/javascripts/habit_tracker.js');


test('row is added', () => {
    $('#button').click();
    tableId= 'myTable'
    var rows = document.getElementById(tableId).getElementsByTagName("tr").length;
    expect( habit.add_row()).toBeCalled();
    expect($(rows).toEqual(3));
});
test('row is removed', () => {
    $('#remove_button').click();
    tableId= 'myTable'
    var rows = document.getElementById(tableId).getElementsByTagName("tr").length;
    expect( habit.removeRow()).toBeCalled();
    expect($(rows).toEqual(2));
});