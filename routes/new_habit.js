var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");



router.post('/', function(req, res, next) {
    var habit_name = req.body.Habit_name
    var tracker = "Habit"
    //Add getter to return current user for username 
    dbms.dbquery("INSERT INTO  leadership2 (tracker,name) VALUES ('"+tracker+"','"+habit_name+"')",
function(err, data){ }
);     
});
module.exports = router;
