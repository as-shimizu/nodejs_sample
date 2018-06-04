var dbUtil = require('./dbUtil.js');

module.exports = {
    insertData : function(name,belong,tel,email, callback) {
        var sql = "insert into registuser (name, belong, tel, email) ";
        sql += "values ($1, $2, $3, $4);"
        var parameter = [name,belong,tel,email];
        dbUtil.insert(sql, parameter, function(error) {
            return callback(error);
        });
    },

    selectAll : function(callback) {
        var sql = 'select * from registuser;'
        var parameter;
        console.log(sql);
        dbUtil.select(sql, parameter, function(error, result) {
            return callback(error, result);
        });
    }
}