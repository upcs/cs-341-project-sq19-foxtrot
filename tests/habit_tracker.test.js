jest.mock('../public/habit_tracker.html');
let habit = require('../public/javascripts/habit_tracker.js');


test('row is added', () => {
    $('#add_button').click();
    tableId= 'myTable'
    var rows = document.getElementById(tableId).getElementsByTagName("tr").length;
    expect( habit.add_row()).toBeCalled();
    //expect($(rows).toEqual(4));
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