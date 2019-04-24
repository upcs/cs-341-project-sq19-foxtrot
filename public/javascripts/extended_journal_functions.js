
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


function countChars(countfrom,displayto) {
  var len = document.getElementById(countfrom).value.length;
  document.getElementById(displayto).innerHTML = len;
}

function validateForm() {

  var x = document.forms["journalForm"]["fjournal"].value;

  var user_name = getCookie('username');

  var ext_jour = "Extended Journal";

  var input = document.getElementById("userInput").value;

  if (x.length == 0) {
      alert("You need to put something in your journal!");
      return false;
  } 
  else {

      $.post("/newInserts", {
          username:user_name,
          journal_type:ext_jour, 
          journal_name:input,
          journal_entry:x
      })
      alert("You've submitted your journal!");
      return (true);
  }
  
}

$(function () {
  $("#name_button").click(function () {
      var input = document.getElementById("userInput").value;
      
      $("#name").replaceWith(("<h2>" + input + "</h2>"));
      return true;

  })
})

$(function () {
  $("#journalSubmitBtn").on('click', validateForm);
});


//added for tests
// module.exports = validateForm;

// //added for tests
module.exports = {
  validateForm
};