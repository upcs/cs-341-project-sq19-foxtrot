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
    
    var array = [];
    
    for(var i = 0; i<data.length; i++)
    {
	array.push({address: data[i].address, facility_name: data[i].facility_name});
    }
    res.json(array);
  
}

  router.post('/', function(req, res, next) {
    
    dbms.dbquery("SELECT *",
    function(err, data){
        queryData(data, res);
    });
    
});

  module.exports = router;