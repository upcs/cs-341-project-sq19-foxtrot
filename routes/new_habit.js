var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");



router.post('/', function(req, res, next) {
    var input = document.getElementById("userInput").value; 
    dbms.dbquery("INSERT INTO  leadership VALUES ('"+tracker+ "','"+name+"')",
function(err, data){ }
);     
});a