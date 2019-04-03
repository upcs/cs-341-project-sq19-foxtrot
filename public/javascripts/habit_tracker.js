//test
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
function mark_cell(x, tablename) {

    x.innerHTML = "Completed";
    x.style.backgroundColor = "#bf7fff"; 
    
    var td = event.target.parentNode; 
    var tr = td; 
    console.log(tr)
    var content = tr.cells[0].textContent;
    var newContent = content.replace("remove","");
    console.log(newContent)
    //var row = $(x).closest("tr").index();
    //console.log(row);

    //var col = $(x).closest("td").index();
    //var table = document.getElementById(tablename);
    //var habit = table.rows[row].cells[0].textContent;
    //var remove = habit.replace("remove","")
    //console.log(remove);
    //var day = table.rows[0].cells[col];
    $.post("/new_mark_habit", { habit_name:newContent});
}

function add_row() {
    var x=document.getElementById('myTable');
    var new_row = x.rows[1].cloneNode(true);                                               
    var input = document.getElementById("userInput").value;  
    //POST
    var username = getCookie('username');
    habitnum = getCookie('tracker')+1
    $.post("/new_habit", {Habit_name:input, user:username, habitnum:habitnum});              
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
    return input
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

function getWeekNumber(d) {
  d = new Date(d);
  var onejan = new Date(d.getFullYear(),0,1);
  var millisecsInDay = 86400000;
  console.log(Math.ceil((((d - onejan) /millisecsInDay) + onejan.getDay()+1)/7));
  return Math.ceil((((d - onejan) /millisecsInDay) + onejan.getDay()+1)/7);
};

function getSundayFromWeekNum(weekNum, year) {
  var sunday = new Date(year, 0, (1 + (weekNum - 1) * 7));
  while (sunday.getDay() !== 0) {
      sunday.setDate(sunday.getDate() - 1);
  }
  console.log(sunday);
  return sunday;
}

function getSaturdayFromWeekNum(weekNum, year) {
  var saturday = new Date(year, 0, (7 + (weekNum - 1) * 7));
  while (saturday.getDay() !== 6) {
      saturday.setDate(saturday.getDate() - 1);
  }
  console.log(saturday);
  return saturday;
}

//External Citation: https://stackoverflow.com/questions/17964170/get-the-weekday-from-a-date-object-or-date-string-using-javascript
function getDayOfWeek(date) {
var dayOfWeek = new Date(date).getDay();
return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}


module.exports = {
      mark_cell,
      add_row,
    removeRow
    };