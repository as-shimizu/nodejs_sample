var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '172.19.9.11',
  user     : 'root',
  password : 'root',
  database : 'regist'
});

module.exports = {
    select : function(sql) {
        getConnection();
        connection.query(sql, function (error, results, fields) {
            console.log(results);
            return results;
        });
    },
    insert : function(sql, callback) {
        //getConnection(function(status) {
            //if(status) {
                connection.query(sql, function (error, results, fields) {
                    //connection.end();
                    return callback(error);
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