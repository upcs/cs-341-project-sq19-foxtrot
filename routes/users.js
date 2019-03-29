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

  for (var i = 1; i < data.length; i++) {
    if (data[i].password == null) {
      i++;
    }
    else {
      array.push({ username: data[i].username, password: data[i].password, theme: data[i].theme});
      console.log("username = " + data[i].username);
      console.log("pass = " + data[i].password);
      console.log("theme = "+ data[i].theme);
    }
  }
  res.json(array);
}

function getUser()
{
  console.log("in getUser");
	return username;
}

module.exports.getUser = getUser; // export your functuion
module.exports = router;
