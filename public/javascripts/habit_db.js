function displayData(){

	// event.preventDefault();
	// alert("I made it here!");

    $.post(
		"/orders",
		null,
	   	function(data){

	       var jourVar = " ";

	       for (var i = 0; i<data.length; i++)
	       {
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


         var x=document.getElementById('prevTable');
         var new_row;
         var cell;

         for(var i=1; i< x.rows.length; i++){
           new_row=x.rows[i];
           for(var j=0; j< new_row.cells.length; j++){
             cell=new_row.cells[j];
               console.log(cell);
             if(cell.innerHTML == 1){
               console.log(cell);
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

function mark_prevCell(x) {
    console.log("marking cell");
    x.innerHTML = "Completed";
    x.style.backgroundColor = "#bf7fff";
}


window.onload = displayData;
