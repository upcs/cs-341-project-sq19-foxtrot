var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");




router.post('/', function(req, res, next) {
    console.log("in new_habit js");
    var user = req.body.user;
    var num_habits = req.body.habitnum;
    var habits = req.body.habitarr;

    console.log(num_habits);
    //Add getter to return current user for username

    dbms.dbquery("UPDATE leadership3 SET tracker='"+num_habits+"', array='"+habits+"' WHERE username='"+user+"';",
    function(err, data){ }
    );
});
module.exports = router;
