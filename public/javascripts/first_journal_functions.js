
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

var input = document.getElementById("userInput").value;

$(function () {
    $("#name_button").click(function () {
        var input = document.getElementById("userInput").value;
        
        $("#name").replaceWith(("<h2>" + input + "</h2>"));

        // $.post("/newInserts", {
        //     journal_name:input
        // })
        return true;

    })
})

function validateForm() {

    var x = document.forms["journalForm"]["fjournal"].value;

    var user_name = getCookie('username');

    var one_sent = "One Sentence Journal"

    if (x.length == 0) {
        alert("You need to put something in your journal!");
        return false;
    } else if (x.length > 100) {
        alert("This is by far too many characters! The amount of characters necessary for this journal is 100. If you like to write more, click on the extended journal button below!");
        return false;
    } 
    else {

        $.post("/newInserts", {
            username:user_name,
            journal_type:one_sent, 
            journal_name:input,
            journal_entry:x
        })
        alert("You've submitted your journal!");
        return (true);
    }
    
}

$(function () {
    $("#journalSubmitBtn").on('click', validateForm);
});


//added for tests
// module.exports = validateForm;

// //added for tests
module.exports = {
    validateForm
};