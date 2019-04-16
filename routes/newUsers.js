var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");


 router.post('/', function (req, res, next) {
    newuser = req.body.username;
    newpass = req.body.password;

     console.log("user" + user);
    console.log("pass" + pass);
    dbms.dbquery("INSERT INTO leadership3 (username,password,theme,habitnum) Values (newuser, newpass, 1, 0);");
});

 module.exports = router;