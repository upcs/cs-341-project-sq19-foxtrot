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

 //add a new habit and new row to habit tracker 
function add_row(){
  var table=document.getElementById('myTable');
  //Get the name of the new habit 
  var input = document.getElementById("userInput").value;
  console.log("Habit name "+input)
  var tableadd = ""

  var username = getCookie('username');
  var habitnum = getCookie('tracker');
  var habitString = getCookie('array');
  var habitArr = habitString.split('|');
  //console.log("HABITS: " + habits)
  //append new habit to habit array
  habitArr.push(input)
  //Add new habit to habit string to save back to data base 
  habitString = habitArr.join('|')

  //update habit array cookie 
  setCookie("array", habitString, .042);
  console.log("Habit number cookie:"+habitnum);

  var rows = table.getElementsByTagName("tr").length;
  rows--;
  console.log("ROW: "+rows)
  tableadd += "<tr>"+ "<th>" + input + "<button class='editbtn' OnClick = 'removeRow()''>remove</button> </th>";
  tableadd += "<th onclick='mark_cell(this)'>"+"</th>"+"<th onclick='mark_cell(this)'>"+ "</th>"+"<th onclick='mark_cell(this)'>"+ "</th>"+"<th onclick='mark_cell(this)'>"+ "</th>"+"<th onclick='mark_cell(this)'>"+ "</th>"+"<th onclick='mark_cell(this)'>"+ "</th>"+"<th onclick='mark_cell(this)'>"+ "</th></tr>";
  habitnum++;

  //update habit number cookie 
  setCookie("tracker", habitnum, .042);
  console.log("Habit number cookie after being set" + getCookie('tracker'));
  console.log("Habit number cookie after adding habit:"+habitnum);

$("#myTable").append(tableadd);

    //Set the input box to empty again to reset it
    document.getElementById("userInput").value = "";
    $.post("/new_habit", {Habit_name:input, user:username, habitnum:habitnum, habitarr:habitString});

}

//display add habit form
function openForm() {
    document.getElementById("myForm").style.display = "block";
    return true;
}

//hide add habit form
function closeForm() {
    document.getElementById("myForm").style.display = "none";
    return true;
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

//Make date labels for habit tracker display dates for current week
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
  sunday.innerHTML = removeTime(sun);
  monday.innerHTML = removeTime(mon);
  tuesday.innerHTML = removeTime(tue);
  wednesday.innerHTML = removeTime(wed);
  thursday.innerHTML = removeTime(thu);
  friday.innerHTML = removeTime(fri);
  saturday.innerHTML = removeTime(sat);
}

//Hides time zone from date when displaying in habit tracker 
function removeTime(date){
  var dateString = date;
  dateString = new Date(dateString).toUTCString();
  dateString = dateString.split(' ').slice(0, 4).join(' ');
  return dateString;
}

//Get week number from current day 
function getWeekNumber(d) {
  d = new Date(d);
  var onejan = new Date(d.getFullYear(),0,1);
  var millisecsInDay = 86400000;
  //console.log(Math.ceil((((d - onejan) /millisecsInDay) + onejan.getDay()+1)/7));
  return Math.ceil((((d - onejan) /millisecsInDay) + onejan.getDay()+1)/7);
}

//Get date of sunday from current week
function getSundayFromWeekNum(weekNum, year) {
  var sunday = new Date(year, 0, (1 + (weekNum - 1) * 7));
  while (sunday.getDay() !== 0) {
      sunday.setDate(sunday.getDate() - 1);
  }
  //console.log(sunday);
  return sunday;
}

function mark_prevCell(x) {
    //console.log("marking cell");
    x.innerHTML = "Completed";
    $(x).css('background-color', 'rgba(255,255,255,0.4)');
}

//Display table of currently tracked habits for user 
function displayHabits(){

  $.post(
    "/orders",
    {user:username},
       function(data){
        var username = getCookie("username");
        var habitnum = getCookie("tracker");
        /*
        var habitArr = [];
        for(var f=0; f<habitnum; f++){
          for(var h=0; h<data.length; h++){
            if(data[h].habit_number == f){
              habitArr[f]=data[h].habit;
            }
          }
        }
      */

      console.log("going to add to table");
      var tableadd = ""
      //add a row for each habit

      var habitString = getCookie("array");
      console.log("HABIT ARRAY: " + habitArr);
      //parse habit string into array of habits 
      var habitArr = habitString.split('|');
      console.log("HABIT ARRAY2: " + habitArr);
      for(var a=0; a<habitnum; a++){
        tableadd += "<tr>"+ "<th>" + habitArr[a] + "<button class='editbtn' OnClick = 'removeRow()''>remove</button> </th>";
        tableadd += "<th onclick='mark_cell(this)'>"+"</th>"+"<th onclick='mark_cell(this)'>"+ "</th>"+"<th onclick='mark_cell(this)'>"
        + "</th>"+"<th onclick='mark_cell(this)'>"+ "</th>"+"<th onclick='mark_cell(this)'>"+ "</th>"
        +"<th onclick='mark_cell(this)'>"+ "</th>"+"<th onclick='mark_cell(this)'>"+ "</th></tr>";
      }
      $("#myTable").append(tableadd);


      //Mark cells that user has already marked as completed 
      var x=document.getElementById('myTable');
      console.log("going to mark table");
      for(var b=0; b<data.length; b++){
        for(var c=0; c<x.rows.length; c += (parseInt(habitnum)+parseInt(2))){
          new_row=x.rows[c];
          console.log(new_row);
          for(var d=0; d<new_row.cells.length; d++){ //for each cell in that row
            cell=new_row.cells[d];
            console.log(cell);
            if(cell.innerHTML == (removeTime(data[b].date))){
              console.log("correct cell");
              var correctRow=x.rows[c+data[b].habit_number+1];
              mark_prevCell(correctRow.cells[d]);
              console.log("marked cell");
            }
          }
        }
      }

    }, "json");

  }

module.exports = {
  setCookie,
  getCookie,
      getWeekNumber,
    getSundayFromWeekNum,
    removeTime
    };