function validateForm(x) {
if (x.length == 0) {
alert("You need to put something in your journal!");
return false;
}
else if (day = 0){
    $.post("/newInserts", {Journal_Sun:x})
    alert("You've submitted your journal!");
    return (true);
    }
else if (day = 1){
    $.post("/newInserts", {Journal_Mon:x})
    alert("You've submitted your journal!");
    return (true);
    }
else if (day = 2){
    $.post("/newInserts", {Journal_Tues:x})
    alert("You've submitted your journal!");
    return (true);
    }
else if (day = 3){
    $.post("/newInserts", {Journal_Wed:x})
    alert("You've submitted your journal!");
    return (true);
    }
else if (day = 4){
    $.post("/newInserts", {Journal_Thu:x})
    alert("You've submitted your journal!");
    return (true);
        }
else if (day = 5){
    $.post("/newInserts", {Journal_Fri:x})
    alert("You've submitted your journal!");
    return (true);
    }
else if (day = 6){
    $.post("/newInserts", {Journal_Sat:x})
    alert("You've submitted your journal!");
    return (true);
    }
}
//added for tests
module.exports = {
  validateForm
};
// //added for tests
// module.exports = {
// 	validateForm
// };
