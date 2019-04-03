/*
Author: Polina, Ashika, Joanna, Sarah
*/
var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");


router.post('/', function (req, res, next) {
  user = req.body.username;
  pass = req.body.password;

  console.log("user" + user);
  console.log("pass" + pass);
  dbms.dbquery("SELECT * FROM leadership3",
    function (err, data) {
      var array = [];
      for (var i = 0; i < data.length; i++) {
        array.push({ username: data[i].username, password: data[i].password, theme: data[i].theme, tracker: data[i].tracker });
        console.log("username = " + data[i].username);
				console.log("theme = " + data[i].theme);
				console.log("tracker = " + data[i].tracker);
      }
      var index = -1;
      for (var i = 0; i < data.length; i++) {
        if (user == data[i].username && pass == data[i].password) {
          index = i;
        }
      }
      if (index == -1) {
        var array2 = [];
        array.push({ username: null, password: null, theme: null, tracker: null });
        res.json(array2);
      }
      res.json(array[index]);
    }
  );
});

//module.exports.getUser = getUser; // export your functuion
module.exports = router;
