function validateForm() {
  var x = document.forms["journalForm"]["fjournal"].value;
  if (x.length == 0) {
    alert("You need to put something in your journal!");
    return false;
  }

  else if (x.length > 100) {
    alert("This is by far too many characters! The amount of characters necessary for this journal is 100. If you like to write more, click on the extended journal button below!");
    return false;
  }


  alert("You've submitted your journal!");
  return (true);

}

  function displayData(){
    console.log("I made it!");
    $.post("/orders",null,
	   function(data, status){
       

	       var tr = " ";
	       
	       for (var i = 0; i<data.length; i++)
	       {
		  tr += "<tr>"+"<td>" + data[i] + "</td>"+"</tr>"; 
	       }
	       
	       $("#myData").append(tr);
	       
	   }, "json");
    
}
function main(){
 
  $("#prevJournalBtn").on('click', displayData);
}