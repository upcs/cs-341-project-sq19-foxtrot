var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");


router.post('/', function(req, res, next) {
    console.log("in new_mark_habit");
    day = req.body.day;
    console.log("DAY! "+ day);
    var today = new Date(day);
    console.log(today);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1);
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);

    var username = req.body.username;
    var habit = req.body.habit_name;
    var habitnum = req.body.habitnum;

    console.log("user" + username + "habit" + habit + "num" + habitnum);
    dbms.dbquery("INSERT INTO  habit (username,adate,habit,habit_number) VALUES ('"+username+"','"+today+"','"+habit+"','"+habitnum+"')",
    function(err, data){ }
    );
    console.log("inserted");

});
module.exports = router;
