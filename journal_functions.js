function validateForm() {
    var x = document.forms["journalForm"]["fjournal"].value;
    if (x == "") {
      alert("You need to put something in your journal!");
      return false;
    }
    else{
      $(document).ready(function(){
        $("#journalBtn").click(function(){
            alert("You have submitted your jounral entry!");
            $("#myJournal").replaceWith( "<h2>Thank you!</h2>" );
                });
        });
      }
  }