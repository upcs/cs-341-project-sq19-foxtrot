
var username = getCookie("username");

function displayData(){

	// event.preventDefault();
	// alert("I made it here!");

    $.post(
		"/journals",
		{user:username},
	   	function(data){

            console.log("I made it there!");
	       var jourVar = " ";

	       for (var i = 0; i<data.length; i++)
	       {
			       jourVar += "<tr>"+"<td>" + new Date(data[i].date) + "-" + data[i].name +"</td>"
		       +"<td>" +"</tr>" + "<tr>" +"<td>" + data[i].entry +"</td>"
					 +"</tr>";
	       }

	       $("#preJournal").append(jourVar);

			   document.getElementById('preJournal').style.display='';
	   }, "json");
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
