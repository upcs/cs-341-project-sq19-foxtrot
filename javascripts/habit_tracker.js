//test
function mark_cell(x) {
    x.innerHTML = "Completed";
    x.style.backgroundColor = "#bf7fff";    
}

function add_row() {

    var x=document.getElementById('myTable');
    var new_row = x.rows[1].cloneNode(true);                      
    new_row.cells[0].innerHTML = "Habit";
    var num_columns = 8
    for (i = 1; i <num_columns; i++) {    
        new_row.cells[i].style.backgroundColor =  "#d9b3ff";
        new_row.cells[i].innerHTML =  ""; 
     }
    new_row.cells[1].style.backgroundColor =  "#d9b3ff";
    new_row.cells[1].innerHTML =  "";
    x.appendChild( new_row );
    var table = document.getElementById("myTable");
    
}
