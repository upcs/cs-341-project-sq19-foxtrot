var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");


router.post('/', function (req, res, next) {
    console.log("in newUsers");

    newuser = req.body.user;
    newpass = req.body.pass;
    one = "1";
    zero = "0";
    dbms.dbquery("INSERT INTO leadership3 (username,password,theme,tracker,name) VALUES ('" + newuser + "','" + newpass + "','" + one + "','" + zero + "','"+ " " + "')",
        function (err, data) {
        }
    );
  

});

module.exports = router;