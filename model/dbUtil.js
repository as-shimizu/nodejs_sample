var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '172.19.9.11',
  user     : 'root',
  password : 'root'
});

module.exports = {
    select : function(sql) {
        getConnection();
        connection.query(sql, function (error, results, fields) {
            console.log(results);
            return results;
        });
    },
    insert : function(sql) {
        getConnection();
        connection.query(sql, function (error, results, fields) {
            console.log(results);
            return results;
        });
    }
}

function getConnection() {
    connection.connect(function(err) {
        if (err) {
        console.error('error connecting: ' + err.stack);
        return;
        }
    
        console.log('connected as id ' + connection.threadId);
    });
}
