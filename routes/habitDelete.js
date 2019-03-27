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
    console.log("In habit_delete.js post");
    dbms.dbquery("DELETE FROM leadership WHERE Habit='"+habit+"';",
    function(err, data){ }
  );
});

module.exports = router;
