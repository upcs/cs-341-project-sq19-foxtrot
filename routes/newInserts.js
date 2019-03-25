var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");

date = new Date(2019, 2, 24);
day = date.getDay();
 
  router.post('/', function(req, res, next){

    var journal_mon = req.body.Journal_Mon; 
    var journal_tue = req.body.Journal_Tue;
    var journal_wed = req.body.Journal_Wed;
    var journal_thu = req.body.Journal_Thu;
    var journal_fri = req.body.Journal_Fri;
    var journal_sat = req.body.Journal_Sat; 
    var journal_sun = req.body.Journal_Sun; 
  
  if(day = 0){
    dbms.dbquery("INSERT INTO leadership (Journal_Sun) VALUES ('"+ journal_sun +"')",
    function(err, data){}
    );}

  else if(day = 1){
    dbms.dbquery("INSERT INTO leadership (Journal_Mon) VALUES ('"+ journal_mon +"')",
    function(err, data){}
    );}

  // else if(day = 2){
  //   dbms.dbquery("INSERT INTO leadership (Journal_Tue) VALUES ('"+ journal_tue +"')",
  //   function(err, data){}
  //   );}

  // else if(day = 3){
  //   dbms.dbquery("INSERT INTO leadership (Journal_Wed) VALUES ('"+ journal_wed +"')",
  //   function(err, data){}
  //   );}
  
  // else if(day = 4){
  //   dbms.dbquery("INSERT INTO leadership (Journal_Thu) VALUES ('"+ journal_thu +"')",
  //   function(err, data){}
  //   );}

  // else if(day = 5){
  //   dbms.dbquery("INSERT INTO leadership (Journal_Fri) VALUES ('"+ journal_fri +"')",
  //   function(err, data){}
  //   );}

  // else if(day = 6){
  //   dbms.dbquery("INSERT INTO leadership (Journal_Sat) VALUES ('"+ journal_sat +"')",
  //   function(err, data){}
  //   );}

  });
  

module.exports = router;