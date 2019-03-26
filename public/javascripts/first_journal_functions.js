// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); 
// var yyyy = today.getFullYear();
// today = mm + '/' + dd + '/' + yyyy;



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

else if (x.length > 100) {
alert("This is by far too many characters! The amount of characters necessary for this journal is 100. If you like to write more, click on the extended journal button below!");
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

//added for tests
// module.exports = validateForm;

// //added for tests
// module.exports = {
//       validateForm
//     };
