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

function validateForm () {

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
            
}

$(function(){
    $("#journalSubmitBtn").on('click', validateForm);
  });
  
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
/*module.exports = {
      validateForm
    };
*/