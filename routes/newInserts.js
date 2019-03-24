var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");

/*Posts from Monday Journal Entries*/ 
router.post('/', function(req, res, next){

  var journal_mon = req.body.Journal_Mon; 
  // var journal_tue = req.body.Journal_Tue;
  // var journal_wed = req.body.Journal_Wed;
  // var journal_thu = req.body.Journal_Thu;
  // var journal_fri = req.body.Journal_Fri;


  dbms.dbquery("INSERT INTO leadership (Journal_Mon) VALUES ('"+ 
  journal_mon +"')",
  function(err, data){}
  );
});

/*Posts from Tuesday Journal Entries*/ 
router.post('/', function(req, res, next){

  // var journal_mon = req.body.Journal_Mon; 
  var journal_tue = req.body.Journal_Tue;
  // var journal_wed = req.body.Journal_Wed;
  // var journal_thu = req.body.Journal_Thu;
  // var journal_fri = req.body.Journal_Fri;


  dbms.dbquery("INSERT INTO leadership (Journal_Tue) VALUES ('"+ 
  journal_tue +"')",
  function(err, data){}
  );
});

/*Posts from Wednesday Journal Entries*/ 
router.post('/', function(req, res, next){

  // var journal_mon = req.body.Journal_Mon; 
  // var journal_tue = req.body.Journal_Tue;
  var journal_wed = req.body.Journal_Wed;
  // var journal_thu = req.body.Journal_Thu;
  // var journal_fri = req.body.Journal_Fri;


  dbms.dbquery("INSERT INTO leadership (Journal_Wed) VALUES ('"+ 
  journal_wed +"')",
  function(err, data){}
  );
});

/*Posts from Thursday Journal Entries*/ 
router.post('/', function(req, res, next){

  // var journal_mon = req.body.Journal_Mon; 
  // var journal_tue = req.body.Journal_Tue;
  // var journal_wed = req.body.Journal_Wed;
  var journal_thu = req.body.Journal_Thu;
  // var journal_fri = req.body.Journal_Fri;


  dbms.dbquery("INSERT INTO leadership (Journal_Thu) VALUES ('"+ 
  journal_thu +"')",
  function(err, data){}
  );
});

/*Posts from Friday Journal Entries*/ 
router.post('/', function(req, res, next){

  // var journal_mon = req.body.Journal_Mon; 
  // var journal_tue = req.body.Journal_Tue;
  // var journal_wed = req.body.Journal_Wed;
  // var journal_thu = req.body.Journal_Thu;
  var journal_fri = req.body.Journal_Fri;


  dbms.dbquery("INSERT INTO leadership (Journal_fri) VALUES ('"+ 
  journal_fri +"')",
  function(err, data){}
  );
});

// dbms.dbquery("INSERT INTO leadership (Journal_Mon, Journal_Tue, Journal_Wed, Journal_Thu, Journal_Fri) VALUES ('"+ 
//   journal_mon +"', '"+ journal_tue +"', '"+ journal_wed +"', '"+ journal_thu +"', '"+ journal_fri +"')",
//   function(err, data){}
module.exports = router;