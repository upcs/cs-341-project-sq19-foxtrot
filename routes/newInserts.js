var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");


router.post('/', function(req, res, next){

  var journal_mon = req.body.Journal_Mon; 
//   var journal_tue = req.body.Journal_Tue;
//   var journal_mon = req.body.Journal_;
//   var journal_mon = req.body.Journal_Mon;
//   var journal_mon = req.body.Journal_Mon;
//   var journal_mon = req.body.Journal_Mon;
//   var journal_mon = req.body.Journal_Mon;
//   var journal_mon = req.body.Journal_Mon;

  dbms.dbquery("INSERT INTO leadership (Journal_Mon) VALUES ('"+ journal_mon + "')",
  function(err, data){}
  );
});
module.exports = router;