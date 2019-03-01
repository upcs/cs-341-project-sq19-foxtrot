function displayData(){

	// event.preventDefault();
	// alert("I made it here!");

    $.post(
		"/orders",
		null,
	   	function(data){

            console.log("I made it there!");
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
         var new_row = x.rows[3];
         var cell = new_row.cells[3].innerHTML;
         if (cell == 0) {
           mark_prevCell(cell);
         }
         console.log(cell);

			   document.getElementById('prevTable').style.display='';
	   }, "json");

}

function mark_prevCell(x) {
    console.log("marking cell");
    x.innerHTML = "Completed";
    //x.style.backgroundColor = "#bf7fff";
}

$(function(){
  $("#prevbtn").on('click', displayData);
});
