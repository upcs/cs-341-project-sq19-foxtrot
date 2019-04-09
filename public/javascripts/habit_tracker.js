function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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


    x.innerHTML = "Completed";
    $(x).css('background-color', 'rgba(255,255,255,0.4)');

    var td = event.target.parentNode;
    var tr = td;
    
    var content = tr.cells[0].textContent;
    var habitName = content.replace("remove","");
    console.log("HABIT!!!! " + habitName);
    
    var col = $(x).closest("th").index();
    var row = $(x).closest("tr").index();
    console.log("initial row "+row);
    row--;
    console.log("after row "+ row);
    var table = document.getElementById('myTable');
    var dayClicked = table.rows[0].cells[col].innerHTML;
    console.log(dayClicked);

    var day = new Date(dayClicked);
    var dd = String(day.getDate()).padStart(2, '0');
    var mm = String(day.getMonth() + 1); 
    var yyyy = day.getFullYear();
    day = yyyy + '-' + mm + '-' + dd;
    console.log(day);
    //POST
    var username = getCookie('username');
    console.log(username);
    console.log("Going to post in new mark habit");
    $.post("/new_mark_habit", {username:username, habit_name:habitName, day:dayClicked, habitnum:row});


}

/*
//old add row function
function add_row() {
    var x=document.getElementById('myTable');
    var new_row = x.rows[1].cloneNode(true);


    //get the name of the habit that the user typed
    var input = document.getElementById("userInput").value;
    var username = getCookie('username');
   
    var rows = x.getElementsByTagName("tr").length;
    console.log("ROW: "+rows)

    console.log(getCookie('tracker'));
    //increment
    var habitnum = getCookie('tracker');
    habitnum++;
    console.log(habitnum);

    console.log("going to post");

    $.post("/new_habit", {Habit_name:input, user:username, habitnum:habitnum});

    //add removeRow button to newly added habit

    new_row.cells[0].innerHTML = input+ '<button class="editbtn" OnClick = "removeRow()">remove</button>';
    new_row.style="display;";
    var num_columns = 8;
    for (i = 1; i <num_columns; i++) {
        new_row.cells[i].style.backgroundColor =  "#d9b3ff";
        new_row.cells[i].innerHTML =  "";
    }
    new_row.cells[1].style.backgroundColor =  "#d9b3ff";
    new_row.cells[1].innerHTML =  "";
    x.appendChild( new_row );


    //close the habit tracker adding form
    closeForm();

    document.getElementById("userInput").value = "";

}
*/

function add_row(){
  var table=document.getElementById('myTable');
  var input = document.getElementById("userInput").value;
  console.log("Habit name "+input)
  var tableadd = ""
  //add a row for each habit

  var username = getCookie('username');
  var habitnum = getCookie('tracker');
  console.log("Habit number cookie:"+habitnum);

  var rows = table.getElementsByTagName("tr").length;
  rows--;
  console.log("ROW: "+rows)  
  tableadd += "<tr>"+ "<th>" + input + "<button class='editbtn' OnClick = 'removeRow()''>remove</button> </th>";
  tableadd += "<th onclick='mark_cell(this)'>"+"</th>"+"<th onclick='mark_cell(this)'>"+ "</th>"+"<th onclick='mark_cell(this)'>"+ "</th>"+"<th onclick='mark_cell(this)'>"+ "</th>"+"<th onclick='mark_cell(this)'>"+ "</th>"+"<th onclick='mark_cell(this)'>"+ "</th>"+"<th onclick='mark_cell(this)'>"+ "</th></tr>";
  habitnum++;
  setCookie("tracker", habitnum, .042);
  console.log("Habit number cookie after being set" + getCookie('tracker'));
  console.log("Habit number cookie after adding habit:"+habitnum);
  
$("#myTable").append(tableadd);

    //Set the input box to empty again to reset it
    document.getElementById("userInput").value = "";
    $.post("/new_habit", {Habit_name:input, user:username, habitnum:habitnum});

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
   console.log(content);
   var habit = content.replace("remove", "");
   console.log(habit);

   //get current habit number and subtract 1, call new POST
   var habit_num = getCookie("tracker") - 1;

   var username = getCookie('username');

   $.post("/new_habit", {Habit_name:habit, user:username, habitnum:habit_num});

   $.post("/habitDelete",  { Habit:habit });

   tr.parentNode.removeChild(tr);
}


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

function getWeekNumber(d) {
  d = new Date(d);
  var onejan = new Date(d.getFullYear(),0,1);
  var millisecsInDay = 86400000;
  //console.log(Math.ceil((((d - onejan) /millisecsInDay) + onejan.getDay()+1)/7));
  return Math.ceil((((d - onejan) /millisecsInDay) + onejan.getDay()+1)/7);
}

function getSundayFromWeekNum(weekNum, year) {
  var sunday = new Date(year, 0, (1 + (weekNum - 1) * 7));
  while (sunday.getDay() !== 0) {
      sunday.setDate(sunday.getDate() - 1);
  }
  //console.log(sunday);
  return sunday;
}

function displayHabits(){
  var username = getCookie("username");

$.post(
  "/orders",
  {user:username},
     function(data){
      var habitnum = getCookie("tracker");
      var habitArr = [];
      for(var f=0; f<habitnum; f++){
        for(var h=0; h<data.length; h++){
          if(data[h].habit_number == f){
            habitArr[f]=data[h].habit;
          }
        }
      }


      console.log("going to add to table");
      var tableadd = ""
      //add a row for each habit

      for(var a=0; a<habitnum; a++){
        tableadd += "<tr>"+ "<th>" + habitArr[a] + "<button class='editbtn' OnClick = 'removeRow()''>remove</button> </th>";
        tableadd += "<th onclick='mark_cell(this)'>"+"</th>"+"<th onclick='mark_cell(this)'>"+ "</th>"+"<th onclick='mark_cell(this)'>"+ "</th>"+"<th onclick='mark_cell(this)'>"+ "</th>"+"<th onclick='mark_cell(this)'>"+ "</th>"+"<th onclick='mark_cell(this)'>"+ "</th>"+"<th onclick='mark_cell(this)'>"+ "</th></tr>";
      }
      $("#myTable").append(tableadd);
     
      

       
    }, "json");

  }

module.exports = {
      mark_cell,
      add_row,
    removeRow
    };
