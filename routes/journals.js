/*
Author: Ashika Mulagada, Sarah Schibel, Polina, Joana
*/

var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");
//var functions = require("./users.js");



router.post('/', function(req, res, next) {
    console.log("In orders.js post");
    console.log(req.body);
    var username = req.body.user;
    //var username = getUser();
    //console.log("username is:" + username);
    console.log("trying to get cookie");
    console.log("Username is: " + username);
    dbms.dbquery("SELECT * FROM journal WHERE Username='"+ username +"'",
    function(err, data){
        queryData(data, res);
    }
    );
});

function queryData(data, res){
    //console.log("In orders.js query data");
    //console.log(data);
    var array = [];


    for(var i = 0; i<data.length; i++)
    {
	    array.push({date: data[i].adate, name: data[i].journal_name, entry: data[i].journal_entry});
    }
    console.log(array);
    res.json(array);
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  module.exports = router;