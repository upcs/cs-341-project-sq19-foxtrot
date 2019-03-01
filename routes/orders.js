var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");



 
function queryData(data, res){
    console.log("made it to this place");
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
		 }
    );
    
});
module.exports = router;
