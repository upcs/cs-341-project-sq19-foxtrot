function displayData(){

	// event.preventDefault();
	// alert("I made it here!");

    $.post(
		"/orders",
		null,
	   	function(data){


         var x=document.getElementById('prevTable');



         var habitWk = data[0].HabitWk;

         $("#prevTable").prepend('<tr class="week"><td colspan= 8 > Week '+ habitWk +' </td></tr>');



	       var jourVar = " ";

	       for (var i = 0; i<data.length; i++)
	       {
           if(data[i].HabitWk != habitWk){
             habitWk = data[i].HabitWk;
             jourVar += '<tr class="week"><td colspan= 8 > Week '+ habitWk +' </td></tr>';
           }
			       jourVar += "<tr>"+"<td>" + data[i].Habit + "</td>"
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
         }

         //make table visible
			   document.getElementById('prevTable').style.display='';
	   }, "json");

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
