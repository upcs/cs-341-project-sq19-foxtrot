/*
Author: Ashika Mulagada, Sarah Schibel, Polina, Joana
*/

var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");
//var functions = require("./users.js");



router.post('/', function(req, res, next) {
    //console.log("In orders.js post");
    //var username = 'Sarah';
    //var username = getUser();
    //console.log("username is:" + username);
    dbms.dbquery("SELECT * FROM journal WHERE Username='Ashika'",
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

module.exports = router;
