//var functions = require("./login_function.js");




function displayData(){

	// event.preventDefault();
	// alert("I made it here!");


  /*$.getScript("login_function.js",function(){
    //getUser();
    console.log("got script");
  });*/

    $.post(
		"/orders",
		null,
	   	function(data){

        //var username= getUser();
        //console.log("Username:" + username);

         var x=document.getElementById('prevTable');

         var weekday = getDayOfWeek(data[1].date);
         console.log(weekday);

         if(weekday == 'Monday'){
           console.log('yes monday');
         }

         var result = getWeekNumber(data[0].date);

         console.log('Week no:' + result);

         console.log('Adding days');

         console.log(data[0].date);

         var newDay = addDays(data[0].date, 2);

         console.log(newDay);


         //get corresponding Sunday, TODO get actual year from Date
         //var sunday = getSundayFromWeekNum(result, 2019);
        // console.log('Sunday date:' + sunday);


         //get corrspoding saturday
         //var saturday = getSaturdayFromWeekNum(result, 2019);



         //for loop through all data, if week num is not equal, make new week row
            //loop through that row until getday matches and mark as completed
         //else if habit doesn't exist in the table add another empty row to the table
            //mark corresponding the row


          //UPDATE
          //do the week head the same way
          //make table of set number of rows according to how many habits the person has
          //


          var habitWk = 0;
          //var habitWk = getWeekNumber(data[0].date);
          var sunday = getSundayFromWeekNum(habitWk, 2019);
          var saturday = getSaturdayFromWeekNum(habitWk, 2019);
          //$("#prevTable").prepend('<tr class="week"><td colspan= 8 > Week '+ sunday + '-' + saturday +' </td></tr>');


           //var habitnum = data[0].habitnum;
           var habitnum = 4;
   	       var jourVar = " ";

   	       for (var i = 0; i<data.length; i++){
              if(getWeekNumber(data[i].date) != habitWk){
                console.log("in if statement");
                habitWk = getWeekNumber(data[i].date);
                var sunday = getSundayFromWeekNum(habitWk, 2019);
                var saturday = getSaturdayFromWeekNum(habitWk, 2019);
                jourVar += '<tr class="week"><td colspan= 8 > Week '+ sunday + '-' + saturday +' </td></tr>';
                jourVar += "<tr>"+"<th>" + "Habit" + "</th>" + "<td>"+ sunday +"</td>" + "<td>"+ addDays(sunday, 1) +"</td>" +"<td>"+ addDays(sunday, 2) +"</td>" +"<td>"+ addDays(sunday, 3) +"</td>" +"<td>"
                + addDays(sunday, 4) +"</td>" +"<td>"+ addDays(sunday, 5) +"</td>" +"<td>"+ addDays(sunday, 6) +"</td> </tr>";

                for(var a=0; a<habitnum; a++){
                  jourVar += "<tr>"+"<th>" + a + "<button class='editbtn' OnClick = 'removeRow()''>remove</button> </th>";
                  jourVar += "<td>"+ 0 +"</td>" + "<td>"+ 0 +"</td>" +"<td>"+ 0 +"</td>" +"<td>"+ 0 +"</td>" +"<td>"+ 0 +"</td>" +"<td>"+ 0 +"</td>" +"<td>"+ 0 +"</td> </tr>";
                }
                /*for(var k = 0; k<7; k++){
                  console.log("in loop" + k);
                  if(j = data[i].date.getDay){
                    console.log("mark day");
                    jourVar += "<td>"+ 1 +"</td>";
                  }
                  else{
                    console.log("dont mark day");
                    jourVar += "<td>"+ 0 +"</td>";
                  }
                  console.log("en loop" + k);
                }*/
              }
              /*else if(data[i].habit_number > habitnum){
                habitnum = data[i].habitnum;
                jourVar += "<tr>"+"<th>" + data[i].habit + "<button class='editbtn' OnClick = 'removeRow()''>remove</button> </th>";
                jourVar += "<td>"+ 0 +"</td>" + "<td>"+ 0 +"</td>" +"<td>"+ 0 +"</td>" +"<td>"+ 0 +"</td>" +"<td>"+ 0 +"</td>" +"<td>"+ 0 +"</td>" +"<td>"+ 0 +"</td>";
                jourVar += "</tr>";
              }*/
   	       }

           $("#prevTable").append(jourVar);


           var weekRows = document.getElementsByClassName("week");
           console.log("Week row:" + weekRows);
           for(var i=0; i<weekRows.length; i++) {
             markWeekRow(weekRows[i]);
           }

           //loop through data again, for each data instance, find corresponding habit num  check if it is either equal to the habit num of equal to the habit name
           //find corresponding date column, mark that cell as complete

           for(var b=0; b<data.length; b++){
             //console.log(new Date(data[b].date));
             //check row 1, and then each row plus habit number
             for(var c=1; c<x.rows.length; c += (habitnum+2)){
               console.log(c);
               console.log(x.rows[c]);
               new_row=x.rows[c];
               for(var d=0; d<new_row.cells.length; d++){
                 cell=new_row.cells[d];
                 console.log(cell);
                 if(cell.innerHTML == (new Date(data[b].date))){
                   console.log("habit number: " + data[b].habit_number);
                   console.log("correct date");
                   console.log(x.rows[c+data[b].habit_number+1])
                   //console.log(x.rows[c+data[b].habitnum+1]);
                   var correctRow=x.rows[c+data[b].habit_number+1];
                   console.log(correctRow.cells[d]);
                   mark_prevCell(correctRow.cells[d]);
                 }
               }
             }
           }


           /*var new_row;
           var cell;
           for(var i=1; i< x.rows.length; i++){
             new_row=x.rows[i];
             for(var j=0; j< new_row.cells.length; j++){
               cell=new_row.cells[j];
                 //console.log(cell);
               if(cell.innerHTML == 1){
                 //console.log(cell);
                 mark_prevCell(cell);
               }
               else if(cell.innerHTML == 0){
                 cell.innerHTML = " ";
               }
             }
           }*/

         //for loop through entire table, if the corresponding habit has that date then make as complete


         //else{
           //get corresponding sunday
         //}
         //make a table for that day, mark (seperate function)

         //go through other data either mark in table or make new table



         /*var habitWk = data[0].HabitWk;

         $("#prevTable").prepend('<tr class="week"><td colspan= 8 > Week '+ habitWk +' </td></tr>');



	       var jourVar = " ";

	       for (var i = 0; i<data.length; i++)
	       {
           if(data[i].HabitWk != habitWk){
             habitWk = data[i].HabitWk;
             jourVar += '<tr class="week"><td colspan= 8 > Week '+ habitWk +' </td></tr>';
           }
			       jourVar += "<tr>"+"<th>" + data[i].Habit + "<button class='editbtn' OnClick = 'removeRow()''>remove</button> </th>"
						 +"<td>"+ data[i].Mon +"</td>"
		       +"<td>"+  data[i].Tue +"</td>"
					 +"<td>"+  data[i].Wed +"</td>"
           +"<td>"+  data[i].Thu +"</td>"
					 +"<td>"+  data[i].Fri +"</td>"
           +"<td>"+  data[i].Sat +"</td>"
           +"<td>"+  data[i].Sun +"</td>"
					 +"</tr>";
	       }

	       $("#prevTable").append(jourVar);

         var weekRows = document.getElementsByClassName("week");
         console.log("Week row:" + weekRows);
         for(var i=0; i<weekRows.length; i++) {
           markWeekRow(weekRows[i]);
         }


         var new_row;
         var cell;

         for(var i=1; i< x.rows.length; i++){
           new_row=x.rows[i];
           for(var j=0; j< new_row.cells.length; j++){
             cell=new_row.cells[j];
               //console.log(cell);
             if(cell.innerHTML == 1){
               //console.log(cell);
               mark_prevCell(cell);
             }
             else if(cell.innerHTML == 0){
               cell.innerHTML = " ";
             }
           }
         }*/

         //make table visible
			   document.getElementById('prevTable').style.display='';
	   }, "json");

}

//External citation: https://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php
/*function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date();
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return weekNo;
}*/

function addDays(d, days) {
    //d = new Date();
    var date = new Date(d);
    //console.log(date);
    date.setDate(date.getDate() + days);
    return date;
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

function markWeekRow(weekRow){
  console.log("in markWeekRow");
  weekRow.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  weekRow.style.border = "10px solid rgba(0, 0, 0, 0.0)";
}

function mark_prevCell(x) {
    //console.log("marking cell");
    x.innerHTML = "Completed";
    x.style.backgroundColor = "#bf7fff";
}


window.onload = displayData;
