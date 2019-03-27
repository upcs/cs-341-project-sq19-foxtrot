

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
			       jourVar += "<tr>"+"<td>" + data[i].Journal_Mon + "</td>"
						 +"<td>"+ data[i].Journal_Tue +"</td>"
		       +"<td>"+  data[i].Journal_Wed +"</td>"
					 +"<td>"+  data[i].Journal_Thu +"</td>"
					 +"<td>"+  data[i].Journal_Fri +"</td>"
					 +"</tr>";
	       }

	       $("#preJournal").append(jourVar);

			   document.getElementById('preJournal').style.display='';
	   }, "json");

}

window.onload = displayData;
