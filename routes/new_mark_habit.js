var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");


router.post('/', function(req, res, next) {
    day = req.body.day;
    console.log("Day" + day);
    var today = new Date(day);
    console.log(today);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1);
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;



    var username = req.body.username;
    var habit = req.body.habit_name

    console.log("Today");
    console.log(today)
    console.log("habit");
    console.log(habit);
    console.log("username");
    console.log(username);

dbms.dbquery("INSERT INTO  habit (username,adate,habit) VALUES ('"+username+"','"+today+"','"+habit+"')",
    function(err, data){ }
    );

});
module.exports = router;
