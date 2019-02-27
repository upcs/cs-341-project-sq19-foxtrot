
function displayData(){
    console.log("I made it!");
    $.post("/orders",null,
	   function(data, status){
       
             console.log("I made it!");
	       var tr = " ";
	 
	       for (var i = 0; i<data.length; i++)
	       {
		  tr += "<tr>"+"<td>" + data[i] + "</td>"+"</tr>"; 
	       }
	       
	       $("#myData").append(tr);
	       
	   }, "json");
    
}

function main(){
 console.log("I made it!");
  $("#prevJournalBtn").on('click', displayData);
}

