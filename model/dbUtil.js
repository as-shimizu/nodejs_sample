var pg      = require('pg');
var dbConnect = require('../conf/dbConfig.js');

module.exports = {
    select : function(sql, callback) {
        var client = new pg.Client(dbConnect.dbConnectStr);
	client.connect(function (error) {
            if (error) {
                rollback(client);
                return callback(error, null);
            }
	client.query({text : sql}, function (error, result) {
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
