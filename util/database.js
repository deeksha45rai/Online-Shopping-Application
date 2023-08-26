const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'Node_Complete',
    password: 'Pqrs307@'
});

module.exports = pool.promise();