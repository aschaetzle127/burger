var connection = require('./connection.js');

function objStuff(ob) {
    var arr = [];

    for (var key in ob) {
        arr.push(key + '=' + ob[key]);
    }
    return arr.toString();
}
var orm = {
    selectAll: function (tableInput, db) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            db(res);
        });
    },
    insertOne: function (tableInput, burgerName, db) {
        var queryString = "INSERT INTO " + tableInput + ' (burger_name) ';
        queryString += "VALUES ('" + burgerName + "');";

        console.log(queryString);
    },
    updateOne: function (table, objColVals, condition, db) {
        var queryString = "UPDATE " + table;
        queryString += " SET " + objStuff(objColVals);
        queryString += " WHERE " + condition;
        console.log(queryString);

        connection.query(queryString, function (err, res) {
            if (err) throw err;

            db(res);
        });
    }
}

module.exports = orm;