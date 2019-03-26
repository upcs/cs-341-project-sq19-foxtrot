date = new Date;
day = date.getDay();

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

// else if (day = 0){
//     $.post("/newInserts", {Journal_Sun:x})
//     alert("You've submitted your journal!");
//     return (true);
//     }


else if (day = 1){
    $.post("/newInserts", {Journal_Mon:x})
    alert("You've submitted your journal!");
    $.get("index.html");
    return (true);
    }

// else if (day = 2){
//     $.post("/newInserts", {Journal_Tue:x})
//     alert("You've submitted your journal!");
//     return (true);
//     }
    
// else if (day = 3){
//     $.post("/newInserts", {Journal_Wed:x})
//     alert("You've submitted your journal!");
//     return (true);
//     }

// else if (day = 4){
//     $.post("/newInserts", {Journal_Thu:x})
//     alert("You've submitted your journal!");
//     return (true);
//     }

// else if (day = 5){
//     $.post("/newInserts", {Journal_Fri:x})
//     alert("You've submitted your journal!");
//     return (true);
//     }

// else if (day = 6){
//     $.post("/newInserts", {Journal_Sat:x})
//     alert("You've submitted your journal!");
//     return (true);
//     }
        
}

$(function(){
    $("#name_button").click(function () {

        var input = document.getElementById("userInput").value; 
        $("#name").replaceWith(("<h2>" + input + "</h2>"));
        return true; 

    })
})

//added for tests
// module.exports = validateForm;

//added for tests
module.exports = {
      validateForm
    };
