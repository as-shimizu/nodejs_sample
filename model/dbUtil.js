var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '172.19.9.11',
  user     : 'root',
  password : 'root',
  database : 'sample',
  port : '3306'
});

module.exports = {
    select : function(sql, callback) {
        //getConnection();
        connection.query(sql, function (error, result, field) {
            return callback(error,result);
        });
    },
    insert : function(sql, callback) {
        //getConnection(function(status) {
            //if(status) {
                connection.query(sql, function (error, result, field) {
                    //connection.end();
                    return callback(error,result);
                });
            //}
        //}); 
    }
}

function getConnection(callback) {
    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return callback(false);
        }
        console.log('connected as id ' + connection.threadId);
        return callback(true);
    });
}