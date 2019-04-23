/*
Author: Ashika Mulagada, Sarah Schibel, Polina, Joana
*/

var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");
//var functions = require("./users.js");



router.post('/', function(req, res, next) {
    console.log("In habit_delete.js post");
    var habit = req.body.Habit;
    console.log(habit);
    user = req.body.user;
    console.log("user = " + user);

    console.log("In habit_delete.js post");
    dbms.dbquery("DELETE FROM habit WHERE habit='"+habit+"' and username='"+user+"';",
    function(err, data){ }
  );
});

module.exports = router;
