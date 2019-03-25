/*
Author: Ashika Mulagada, Sarah Schibel, Polina, Joana
*/

var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");

router.post('/', function(req, res, next) {
    console.log("In orders.js post");
    dbms.dbquery("SELECT * FROM leadership WHERE Habit IS NOT NULL",
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
	    array.push({Journal_Mon: data[i].Journal_Mon, Journal_Tue: data[i].Journal_Tue, Journal_Wed: data[i].Journal_Wed
      ,Journal_Thu: data[i].Journal_Thu, Journal_Fri: data[i].Journal_Fri, HabitWk: data[i].HabitWk,
      Habit: data[i].Habit, Mon: data[i].Mon,Tue: data[i].Tue, Wed: data[i].Wed, Thu: data[i].Thu,
      Fri: data[i].Fri, Sat: data[i].Sat, Sun: data[i].Sun});
    }
    res.json(array);
}


module.exports = router;
