var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'Hpesoj127!',
        database: 'burgers_db'
    });
}

connection.connect(function (err) {
    if (err) throw err;
    console.log('Connected as id: ' + connection.threadId)
});

module.exports = connection;