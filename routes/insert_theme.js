var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");

router.post('/', function (req, res, next) {
    tnumber = req.body.tnumber;
    console.log("tnum = " + tnumber);
    user = req.body.user;
    console.log("user = " + user);

    console.log("In insert_theme.js");
    dbms.dbquery("UPDATE leadership3 SET theme='" + tnumber + "' WHERE username='" + user + "';",
        function (err, data) { }

    );

});

//module.exports.getUser = getUser; // export your functuion
module.exports = router;
