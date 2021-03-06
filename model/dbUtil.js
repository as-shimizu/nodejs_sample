var pg      = require('pg');
var dbConnect = require('../conf/dbConf.js');

module.exports = {
    select : function(sql, parameter, callback) {
        var client = new pg.Client(dbConnect.dbConnectStr);
        client.connect(function (error) {
            if (error) {
                return callback(error, null);
            }
            client.query(sql, parameter, function (error, result) {
                if (error) {
                    return callback(error, null);
                } 
                client.end();
                return callback(error,result);
            });
        });
    },
    insert : function(sql, parameter, callback) {
        var client = new pg.Client(dbConnect.dbConnectStr);
        client.connect(function (error) {
            if (error) {
                 rollback(client);
                return callback(error, null);
            }
            client.query(sql, parameter, function (error, result) {
                if (error) {
                    return callback(error, null);
                } 
                client.end();
                return callback(error,result);
            });
        });
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
