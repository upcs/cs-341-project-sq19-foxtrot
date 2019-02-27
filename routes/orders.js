var express = require('express');
var app = express();

var router = express.Router();

 
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
 

  module.exports = router;