//test

function mark_cell(x, tablename) {
    x.innerHTML = "Completed";
    x.style.backgroundColor = "#bf7fff";    
    var row = $(x).closest("tr").index();
    console.log(row)
    var col = $(x).closest("td").index();
    var table = document.getElementById(tablename);
    var habit = table.rows[row].cells[1]
    var day = table.rows[1].cells[col]
    $.post("/new_mark_habit", { habit_name:habit});
}

function add_row() {
    var x=document.getElementById('myTable');
    var new_row = x.rows[1].cloneNode(true);                                               
    var input = document.getElementById("userInput").value;  
    //POST
    $.post("/new_habit", {Habit_name:input});              
    new_row.cells[0].innerHTML = input+ '<button class="editbtn" OnClick = "removeRow()">remove</button>';
    new_row.style="display;";
    var num_columns = 8
    for (i = 1; i <num_columns; i++) {
        new_row.cells[i].style.backgroundColor =  "#d9b3ff";
        new_row.cells[i].innerHTML =  "";
    }
    new_row.cells[1].style.backgroundColor =  "#d9b3ff";
    new_row.cells[1].innerHTML =  "";
    x.appendChild( new_row );
    var table = document.getElementById("myTable");
    closeForm();
    document.getElementById("userInput").value = "";
    
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//External Citation: https://stackoverflow.com/questions/11553768/remove-table-row-after-clicking-table-row-delete-button-->
function removeRow() {
   var td = event.target.parentNode;
   var tr = td.parentNode; // the row to be removed

   //getting habit name
   var content = td.textContent;
   var newContent = content.replace("remove", "");
   $.post("/habitDelete",  { Habit:newContent });

   tr.parentNode.removeChild(tr);
}
