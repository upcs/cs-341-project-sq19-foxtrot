/*
Author: Ashika Mulagada, Sarah Schibel, Polina, Joana
*/

var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");



router.post('/', function(req, res, next) {
    console.log("In orders.js post");
    dbms.dbquery("SELECT Journal_Mon FROM leadership",
    function(err, data){
        queryData(data, res);
    }
    );

});

function queryData(data, res){
    console.log("In orders.js query data");
    var array = [];

    for(var i = 0; i<data.length; i++)
    {
	    array.push({Journal_Mon: data[i].Journal_Mon});
    }
    res.json(array);

}


module.exports = router;
