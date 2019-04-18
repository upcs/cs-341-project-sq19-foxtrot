var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");


router.post('/', function (req, res, next) {
    console.log("in newUsers");

    newuser = req.body.user;
    newpass = req.body.pass;
    one = "1";
    zero = "0";

    console.log("user" + newuser);
    console.log("pass" + newpass);
    dbms.dbquery("INSERT INTO leadership3 (username,password,theme,habitnum) VALUES ('" + newuser + "','" + newpass + "','" + one + "','" + zero + "')",
        function (err, data) {
            console.log("inserted1");
        }

    );
    console.log("inserted2");

});

module.exports = router;