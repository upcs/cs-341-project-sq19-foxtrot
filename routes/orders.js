var express = require('express');
var app = express();

var router = express.Router();
var dbms = require('./dbms.js');


 
//changing from GET to POST 
  /* GET users listing. */

/*router.get('/', function(req, res, next) {

    res.send(obj);

  });
  */
  app.post('/', function (req, res) {
    res.send(obj)
  })

  router.post('/', function (req, res) {
    res.send(obj)
  })

  function queryData(data, res){
    console.log("I made it!");
    var array = [];
    
    for(var i = 0; i<data.length; i++)
    {
	array.push({Journal_Mon: data[i].Journal_Mon});
    }
    res.json(array);
  
}

  router.post('/', function(req, res, next) {
  
    dbms.dbquery("SELECT Journal_Mon FROM leadership",
    function(err, data){
        queryData(data, res);
    });
    
});

  module.exports = router;