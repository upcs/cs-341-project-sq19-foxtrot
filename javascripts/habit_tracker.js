//test
function mark_cell(x) {
    x.innerHTML = "Completed";
    x.style.backgroundColor = "#bf7fff";    
}

function add_row() {
    var x=document.getElementById('myTable');
    var new_row = x.rows[1].cloneNode(true);     
    var input = document.getElementById("userInput").value;                
    new_row.cells[0].innerHTML = input+ '<button class="editbtn" OnClick = "removeRow()">remove</button>';
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

<!--External Citation: https://stackoverflow.com/questions/11553768/remove-table-row-after-clicking-table-row-delete-button-->
function removeRow() {
   var td = event.target.parentNode; 
   var tr = td.parentNode; // the row to be removed
   tr.parentNode.removeChild(tr);
}
