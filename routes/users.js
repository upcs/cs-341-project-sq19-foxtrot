/*
Author: Polina, Ashika, Joanna, Sarah
*/
var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");



router.post('/', function (req, res, next) {
  var username = req.body.user;
  console.log(username);
  console.log("In users.js post");
  dbms.dbquery("SELECT * FROM leadership",
    function (err, data) {
      queryData(data, res);
    }
  );

});

function queryData(data, res) {
  console.log("In users.js query data");
  var array = [];

  for (var i = 1; i < data.length; i++) {
    if (data[i].Username == null) {
      i++;
    }
    else {
      array.push({ Username: data[i].Username, Password: data[i].Password });
      console.log("username = " + data[i].Username);
      console.log("pass = " + data[i].Password);
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
