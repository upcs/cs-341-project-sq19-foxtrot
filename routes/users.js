/*
Author: Polina, Ashika, Joanna, Sarah
*/
var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");



router.post('/', function (req, res, next) {
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

  for (var i = 0; i < data.length; i++) {
    array.push({ Username: data[i].Username, Password: data[i].Password });
    console.log("username = " + data[i].Username);
    console.log("pass = " + data[i].Password);
  }
  res.json(array);
}


module.exports = router;