

function displayData(){

    $.post(
		"/orders",
		null,
	   	function(data){

            console.log("I made it there!");
            console.log(data);
	       var jourVar = " ";

	       for (var i = 0; i<data.length; i++)
	       {
			       jourVar += "<tr>"+"<td>" + data[i].Journal_Mon + "</td>"
						 +"<td>"+ data[i].Journal_Tue +"</td>"
		       +"<td>"+  data[i].Journal_Wed +"</td>"
					 +"<td>"+  data[i].Journal_Thu +"</td>"
					 +"<td>"+  data[i].Journal_Fri +"</td>"
					 +"</tr>";
	       }

         console.log(jourVar);

	       $("#preJournal").append(jourVar);

			   document.getElementById('preJournal').style.display='';
	   }, "json");

}

window.onload = displayData;
