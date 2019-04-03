
var username = getCookie("username");

function displayData(){

    $.post(
		"/journals",
		{user:username},
	   	function(data){

            console.log("I made it there!");
	       var jourVar = " ";

	       for (var i = 0; i<data.length; i++)
	       {
			       jourVar += "<tr class='week'>"+"<td>" + removeTime(data[i].date) + " - " + data[i].name +"</td>"
		        +"</tr>" + "<tr>" +"<td>" + data[i].entry +"</td>"
					 +"</tr>";
	       }

	       $("#preJournal").append(jourVar);

         var weekRows = document.getElementsByClassName("week");
         console.log("Week row:" + weekRows);
         for(var i=0; i<weekRows.length; i++) {
           markWeekRow(weekRows[i]);
         }

			   document.getElementById('preJournal').style.display='';
	   }, "json");
}

function removeTime(date){
  var dateString = date;
  dateString = new Date(dateString).toUTCString();
  dateString = dateString.split(' ').slice(0, 4).join(' ');
  return dateString;
}

function markWeekRow(weekRow){
  console.log("in markWeekRow");
  weekRow.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  weekRow.style.border = "10px solid rgba(0, 0, 0, 0.0)";
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
