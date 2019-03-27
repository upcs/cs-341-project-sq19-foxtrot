var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");

// date = new Date();
// day = date.getDay();

// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); 
// var yyyy = today.getFullYear();
// today = mm + '/' + dd + '/' + yyyy;
// var input = req.body.today; 

// dbms.dbquery("UPDATE leadership2 SET '" + today + "'='" + input + "' WHERE Journal = x, Username = x",
// function(err, data){ 

// })

(function() {
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  Date.prototype.getDayName = function() {
      return days[ this.getDay() ];
  };
})();

var now = new Date();

var today = now.getDayName();

 
  router.post('/', function(req, res, next){
console.log("Made it here!");


    var journal_mon = req.body.Journal_Mon; 
    var journal_tue = req.body.Journal_Tue;
    var journal_wed = req.body.Journal_Wed;
    var journal_thu = req.body.Journal_Thu;
    var journal_fri = req.body.Journal_Fri;

  if(today == "Monday"){
    dbms.dbquery("INSERT INTO leadership (Journal_Mon) VALUES ('"+ journal_mon +"')",
    function(err, data){}
    );}

  else if(today == "Tuesday"){
    dbms.dbquery("INSERT INTO leadership (Username, Journal_Tue) VALUES ('" + "Ashika" + "','"+ journal_tue +"')",
    function(err, data){}
    );}

  else if(today == "Wednesday"){
    dbms.dbquery("INSERT INTO leadership (Username, Journal_Wed) VALUES ('" + "Ashika" + '","' + journal_wed +"')",
    function(err, data){}
    );}
  
  else if(today == "Thursday"){
    dbms.dbquery("INSERT INTO leadership (Journal_Thu) VALUES ('"+ journal_thu +"')",
    function(err, data){}
    );}

  else if(today == "Friday"){
    dbms.dbquery("INSERT INTO leadership (Journal_Fri) VALUES ('"+ journal_fri +"')",
    function(err, data){}
    );}
  
 
  });
  

module.exports = router;