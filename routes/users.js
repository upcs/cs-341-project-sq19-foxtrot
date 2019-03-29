/*
Author: Polina, Ashika, Joanna, Sarah
*/
var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");



router.post('/', function (req, res, next) {

  console.log("In users.js post");
  dbms.dbquery("SELECT * FROM leadership3",
    function (err, data) {
      queryData(data, res);
    }
  );

});

function queryData(data, res) {
  console.log("In users.js query data");
  var array = [];
  console.log(data);

  for (var i = 0; i < data.length; i++) {
    array.push({ username: data[i].username, password: data[i].password, theme: data[i].theme, tracker: data[i].tracker });
    console.log("username = " + data[i].username);
    console.log("pass = " + data[i].password);
    console.log("theme = " + data[i].theme);
    console.log("tracker = " + data[i].tracker);
  }
  res.json(array);
}


//module.exports.getUser = getUser; // export your functuion
module.exports = router;
