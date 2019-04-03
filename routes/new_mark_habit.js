var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");


router.post('/', function(req, res, next) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1); 
    var yyyy = today.getFullYear();
    today = 'D' +mm + '_' + dd + '_' + yyyy;
    //today = 'D3_4_2019'
    //habit = 'Habit'
    console.log(today)
    var input = '1'; 
    var username = req.body.habit_name;
    var habit = req.body.habit_name
    //Add getter to return current user for username 
    
dbms.dbquery("INSERT INTO  habit (username,adate,habit) VALUES ('"+username+"','"+today+"','"+habit_name+"')",
function(err, data){ }
);     
/*dbms.dbquery("UPDATE  leadership2 SET D3_4_2019=1 WHERE Tracker='Habit' AND Name='Practice gratitude';",
function(err, data){ }
);*/     
});
module.exports = router;
