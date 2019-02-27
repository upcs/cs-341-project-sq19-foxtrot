function validateForm() {
    var x = document.forms["journalForm"]["fjournal"].value;
    if (x.length == 0) {
      alert("You need to put something in your journal!");
      return false;
    }


    alert("You've submitted your journal!");
    return (true);
   
  }
//added for tests
module.exports = {
	validateForm
};
