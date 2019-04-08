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
  changeDays()

    x.innerHTML = "Completed";
    //x.style.backgroundColor = "#bf7fff";
    //var color = document.getElementById("prevbtn").style.backgroundColor;
    //document.getElementById("prevbtn").style.opacity = "0.5";
    //x.style.opacity = "0.5";
    $(x).css('background-color', 'rgba(255,255,255,0.4)');

    var td = event.target.parentNode;
    var tr = td;
    console.log(tr);
    var content = tr.cells[0].textContent;
    var newContent = content.replace("remove","");
    console.log(newContent);


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

//For when user creates new habit
function add_row() {
    var x=document.getElementById('myTable');
    var new_row = x.rows[1].cloneNode(true);
    var input = document.getElementById("userInput").value;
    //POST
    var username = getCookie('username');

    console.log(getCookie('tracker'));
    //increment
    var habitnum = getCookie('tracker');
    habitnum++;
    console.log(habitnum);

    console.log("going to post");
    $.post("/new_habit", {Habit_name:input, user:username, habitnum:habitnum});

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
    closeForm();
    document.getElementById("userInput").value = "";
    return input
}

//For displaying habits that are already in database
function addRow(input){
  var x=document.getElementById('myTable');
  var new_row = x.rows[1].cloneNode(true);
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
      console.log(habitArr)
      var table = document.getElementById('myTable');
      var tableadd = ""
      for(var a=0; a<habitnum; a++){
        tableadd += "<tr>"+"<th>" + habitArr[a] + "<button class='editbtn' OnClick = 'removeRow()''>remove</button> </th>";
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
