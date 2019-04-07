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
    //change text and color of clicked cell  
    x.innerHTML = "Completed";
    x.style.backgroundColor = "#bf7fff"; 
    
    //get clicked cell
    var td = event.target.parentNode; 
    var tr = td; 
    console.log(tr);

    //get habit name of clicked cell
    var content = tr.cells[0].textContent;
    var newContent = content.replace("remove","");
    console.log(newContent);

    //get date of clicked cell
    var col = $(x).closest("th").index();
    var table = document.getElementById('myTable');
    var dayClicked = table.rows[0].cells[col].innerHTML;
    console.log("day  " + dayClicked);

    //POST
    var username = getCookie('username');
    $.post("/new_mark_habit", {username:username, habit_name:newContent, day:dayClicked});
    
}

//For when user creates new habit
function add_row() {
    var x=document.getElementById('myTable');
    var new_row = x.rows[1].cloneNode(true);

    //get the name of the habit that the user typed                                                
    var input = document.getElementById("userInput").value;  
    var username = getCookie('username');
    var habitnum = getCookie('tracker')+1;

    //POST
    $.post("/new_habit", {Habit_name:input, user:username, habitnum:habitnum});
    
    //add removeRow button to newly added habit
    new_row.cells[0].innerHTML = input+ '<button class="editbtn" OnClick = "removeRow()">remove</button>';
    new_row.style="display;";

    //setting bg color of newly added row
    var num_columns = 8;
    for (i = 1; i <num_columns; i++) {
        new_row.cells[i].style.backgroundColor =  "#d9b3ff";
        new_row.cells[i].innerHTML =  "";
    }
    new_row.cells[1].style.backgroundColor =  "#d9b3ff";
    new_row.cells[1].innerHTML =  "";

    //append new row onto the table
    x.appendChild( new_row );

    //close the habit tracker adding form 
    closeForm();

    //Set the input box to empty again to reset it 
    document.getElementById("userInput").value = "";
}

//Make habit tracker adder form visible
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

//Make habit tracker adder form not visible
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

//make columns display the dates for current week
function changeDays(){
  today = new Date()
  var yyyy = today.getFullYear();
  weekNum = getWeekNumber(today);
  sun = getSundayFromWeekNum(weekNum,yyyy);
  d = sun.getDate();

  //initializing days of week to sun
  //to increment later
  mon = new Date(sun);
  tue = new Date(sun);
  wed = new Date(sun);
  thu = new Date(sun);
  fri = new Date(sun);
  sat = new Date(sun);
  
  //incrementing dates
  mon.setDate(d+1);
  tue.setDate(d+2);
  wed.setDate(d+3);
  thu.setDate(d+4);
  fri.setDate(d+5);
  sat.setDate(d+6);

  //fetching html
  var sunday=document.getElementById('sun');
  var monday=document.getElementById('mon');
  var tuesday=document.getElementById('tue');
  var wednesday=document.getElementById('wed');
  var thursday=document.getElementById('thu');
  var friday=document.getElementById('fri');
  var saturday=document.getElementById('sat');
  
  //set text of day columns to its proper numerical date
  sunday.innerHTML = sun;
  monday.innerHTML = mon;
  tuesday.innerHTML = tue;
  wednesday.innerHTML = wed;
  thursday.innerHTML = thu;
  friday.innerHTML = fri;
  saturday.innerHTML = sat;

}

//get number of current week
function getWeekNumber(d) {
  d = new Date(d);
  var onejan = new Date(d.getFullYear(),0,1);
  var millisecsInDay = 86400000;
  console.log(Math.ceil((((d - onejan) /millisecsInDay) + onejan.getDay()+1)/7));
  return Math.ceil((((d - onejan) /millisecsInDay) + onejan.getDay()+1)/7);
};

//get date of sunday of current week
function getSundayFromWeekNum(weekNum, year) {
  var sunday = new Date(year, 0, (1 + (weekNum - 1) * 7));
  while (sunday.getDay() !== 0) {
      sunday.setDate(sunday.getDate() - 1);
  }

  return sunday;
}

//make table display currently tracked habits of logged in user
function displayHabits(){
  var username = getCookie("username");
 // 
$.post(
  "/orders",
  {user:username},
     function(data){
      var habitnum = getCookie("tracker");
      var habitArr = [];
      //getting array of current user's habits
      for(var f=0; f<habitnum; f++){
        for(var h=0; h<data.length; h++){
          if(data[h].habit_number == f){
            habitArr[f]=data[h].habit;
          }
        }
      }
  
      var tableadd = ""
      //add a row for each habit 
      for(var a=0; a<habitnum; a++){
        tableadd += "<tr>"+"<th>" + habitArr[a] + "<button class='editbtn' OnClick = 'removeRow()''>remove</button> </th>";
        tableadd += "<th onclick='mark_cell(this)'>"+"</th>"+"<th onclick='mark_cell(this)'>"+ "</th>"+"<th onclick='mark_cell(this)'>"+ "</th>"+"<th onclick='mark_cell(this)'>"+ "</th>"+"<th onclick='mark_cell(this)'>"+ "</th>"+"<th onclick='mark_cell(this)'>"+ "</th>"+"<th onclick='mark_cell(this)'>"+ "</th></tr>";
      }
      //append those rows onto existing table
      $("#myTable").append(tableadd);
         
    }, "json");

  }

module.exports = {
      mark_cell,
      add_row,
      removeRow
    };