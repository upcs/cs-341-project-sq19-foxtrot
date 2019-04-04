var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");



var arrayName = [];
router.post('/', function(req, res, next) {
    var user = req.body.user
    var habit_name = req.body.Habit_name
    num_habits = req.body.habitnum
    //Add getter to return current user for username 
    dbms.dbquery("UPDATE leadership3 SET habitnum=num_habits WHERE user='"+user+"';",
    function(err, data){ }
    );    
    
});
module.exports = router;
