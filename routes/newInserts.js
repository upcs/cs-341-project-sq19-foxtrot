var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");


  router.post('/', function(req, res, next){
    console.log("Made it here!");

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1);
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    console.log("Today");
    console.log(today);
    var user_name = req.body.username;
    var journal_entry = req.body.journal_entry;
    var journal_name = req.body.journal_name;
    var journal_type = req.body.journal_type;

    dbms.dbquery("INSERT INTO journal (username, adate, journal_type, journal_name, journal_entry) VALUES ('" + user_name + "','" + today + "','"+ journal_type + "','"+ journal_name + "','"+ journal_entry + "')",
    function(err, data){}
    )});


module.exports = router;
