var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");



router.post('/', function(req, res, next) {
    var habit_name = document.getElementById("userInput").value; 
    var tracker = "Habit"
    //Add getter to return current user for username 
    dbms.dbquery("INSERT INTO  leadership(username,tracker,name) VALUES ('"+username+ "','"+tracker+ "','"+habit_name+"')",
function(err, data){ }
);     
});