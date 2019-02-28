

function displayData(){

	// event.preventDefault(); 
	alert("I made it here!");
	
    $.post("/orders",null,
	   function(data, status){
       
            console.log("I made it there!");
	       var jourVar = " ";
	 
	       for (var i = 0; i<data.length; i++)
	       {
			jourVar += "<li>" + data[i].Journal_Mon + "</li>"; 
	       }
	       
	       $("#preJournal").append(jourVar);
	       
	   }, "json");
    
}

$(function(){
	console.log("I made it everywhere!");
  $("#dataButton").on('click', displayData);
});

