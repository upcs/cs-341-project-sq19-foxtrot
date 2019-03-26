var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");


router.post('/', function(req, res, next) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    today = mm + '_' + dd + '_' + yyyy;
    var input = 1; 
    var username = "";
    var habit = req.body.habit_name
    //Add getter to return current user for username 
    
    dbms.dbquery("UPDATE  leadership SET '" + today + "'='" + input + "' WHERE Habit = '"+habit+"'",
function(err, data){ }
);     
});