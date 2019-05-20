var orm = require("../config/orm.js");

var burgerB = {
    selectAll: function (tableInput, db) {
        orm.selectAll(tableInput, function (res) {
            db(res);
        });
    },
    insertOne: function (tableInput, burgerName, db) {
        orm.insertOne(tableInput, burgerName, function (res) {
            db(res);
        });
    },
    updateOne: function (tableInput, objColVals, condition, db) {
        orm.updateOne(tableInput, objColVals, condition, function (res) {
            db(res);
        })
    }
}

module.exports = burgerB;