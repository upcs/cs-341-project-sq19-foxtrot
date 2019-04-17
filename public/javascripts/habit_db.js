//var functions = require("./login_function.js");



var username = getCookie("username");

function displayData(){


    $.post(
		"/orders",
    {user:username},
	   	function(data){

         var x=document.getElementById('prevTable');

          var habitWk = 0;
          //var habitWk = getWeekNumber(data[0].date);
          var sunday = getSundayFromWeekNum(habitWk, 2019);
          var saturday = getSaturdayFromWeekNum(habitWk, 2019);
          //$("#prevTable").prepend('<tr class="week"><td colspan= 8 > Week '+ sunday + '-' + saturday +' </td></tr>');


           //var habitnum = data[0].habitnum;
           var habitnum = getCookie("tracker");
            var jourVar = " ";
            console.log("Habit Num from cookie is " + habitnum);

           var habitArr = [];
           for(var f=0; f<habitnum; f++){
             for(var h=0; h<data.length; h++){
               if(data[h].habit_number == f){
                 habitArr[f]=data[h].habit;
               }
             }
           }

   	       for (var i = 0; i<data.length; i++){
              if(getWeekNumber(data[i].date) != habitWk){
                console.log("in if statement");
                habitWk = getWeekNumber(data[i].date);
                var sunday = getSundayFromWeekNum(habitWk, 2019);
                var saturday = getSaturdayFromWeekNum(habitWk, 2019);
                jourVar += '<tr class="week"><td colspan= 8 > Week '+ removeTime(sunday) + '-' + removeTime(saturday) +' </td></tr>';
                jourVar += "<tr>"+"<th>" + "Habit" + "</th>" + "<td>"+ removeTime(sunday) +"</td>" + "<td>"
                + removeTime(addDays(sunday, 1)) +"</td>" +"<td>"+ removeTime(addDays(sunday, 2)) +"</td>"
                +"<td>"+ removeTime(addDays(sunday, 3)) +"</td>" +"<td>"+ removeTime(addDays(sunday, 4)) +"</td>" +"<td>"
                + removeTime(addDays(sunday, 5)) +"</td>" +"<td>"+ removeTime(addDays(sunday, 6)) +"</td> </tr>";

                for(var a=0; a<habitnum; a++){
                  jourVar += "<tr>"+"<th>" + habitArr[a] + "<button class='editbtn' OnClick = 'removeRow()''>remove</button> </th>";
                  jourVar += "<td> "+ "</td>" + "<td> "+"</td>" +"<td> "+"</td>" +"<td> "+ " " +"</td>" +"<td> "+ " " +"</td>" +"<td> "+ " " +"</td>" +"<td> "+ " " +"</td> </tr>";
                }
              }
   	       }

           $("#prevTable").append(jourVar);


           var weekRows = document.getElementsByClassName("week");
           console.log("Week row:" + weekRows);
           for(var i=0; i<weekRows.length; i++) {
             markWeekRow(weekRows[i]);
           }


           for(var b=0; b<data.length; b++){
             for(var c=1; c<x.rows.length; c += (parseInt(habitnum)+parseInt(2))){
               console.log(x.rows.length);
               console.log(habitnum);
               console.log(parseInt(c)+parseInt(habitnum)+parseInt(2));
               console.log(c);
               console.log(x.rows[c]);
               new_row=x.rows[c];
               for(var d=0; d<new_row.cells.length; d++){ //for each cell in that row
                 cell=new_row.cells[d];
                 console.log(cell);
                 if(cell.innerHTML == (removeTime(data[b].date))){
                   console.log("habit number: " + data[b].habit_number);
                   console.log("correct date");
                   console.log(x.rows[c]);
                   console.log("habit num from data" + data[b].habit_number);
                   console.log(x.rows[c+data[b].habit_number]);
                   console.log(c+data[b].habit_number+1);
                   console.log(x.rows.length);
                   console.log(x.rows[c+data[b].habit_number+1]);

                   //console.log(x.rows[c+data[b].habit_number+1].cells[d]);

                   var correctRow=x.rows[c+data[b].habit_number+1];
                   console.log(correctRow);
                   console.log(correctRow.cells[d]);
                   mark_prevCell(correctRow.cells[d]);
                 }
               }
             }
           }
         //make table visible
			   document.getElementById('prevTable').style.display='';
	   }, "json");
}

function removeTime(date){
  var dateString = date;
  dateString = new Date(dateString).toUTCString();
  dateString = dateString.split(' ').slice(0, 4).join(' ');
  return dateString;
}

function addDays(d, days) {
    //d = new Date();
    var date = new Date(d);
    //console.log(date);
    date.setDate(date.getDate() + days);
    return date;
}

//External citation: https://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php
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

function markWeekRow(weekRow){
  console.log("in markWeekRow");
  weekRow.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  weekRow.style.border = "10px solid rgba(0, 0, 0, 0.0)";
}

function mark_prevCell(x) {
    //console.log("marking cell");
    x.innerHTML = "Completed";
    $(x).css('background-color', 'rgba(255,255,255,0.4)');
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


window.onload = displayData;

module.exports = {
  addDays,
  getWeekNumber,
  getSundayFromWeekNum,
  getCookie
};
