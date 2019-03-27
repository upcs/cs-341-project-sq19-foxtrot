
/*
Getting week day for database insertion 
https://stackoverflow.com/questions/4822852/how-to-get-the-day-of-week-and-the-month-of-the-year#4822882
*/

(function() {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    Date.prototype.getDayName = function() {
        return days[ this.getDay() ];
    };
})();

var now = new Date();

var today = now.getDayName();

$(document).ready(function(){
    $("#journalSubmitBtn").click(function(){

var x = document.forms["journalForm"]["fjournal"].value;

if (x.length == 0) {
alert("You need to put something in your journal!");
return false;
}

    else if (today == "Monday"){
        $.post("/newInserts", {Journal_Mon:x})
        alert("You've submitted your journal!");
        return (true);
        }
        else if (today == "Tuesday"){
            $.post("/newInserts", {Journal_Tue:x})
            alert("You've submitted your journal!");
            return (true);
            }
            else if (today == "Wednesday"){
                $.post("/newInserts", {Journal_Wed:x})
                alert("You've submitted your journal!");
                return (true);
                }
                else if (today == "Thursday"){
                    $.post("/newInserts", {Journal_Thu:x})
                    alert("You've submitted your journal!");
                    return (true);
                    }
                    else if (today == "Friday"){
                        $.post("/newInserts", {Journal_Fri:x})
                        alert("You've submitted your journal!");
                        return (true);
                        }

    else {
        alert("It didn't work :(")
        return (false);
        }
            
})
})


  
$(function(){
    $("#name_button").click(function () {

        var input = document.getElementById("userInput").value; 
        $("#name").replaceWith(("<h2>" + input + "</h2>"));
        return true; 

    })
})


// //added for tests
// module.exports = {
//       validateForm
//     };

