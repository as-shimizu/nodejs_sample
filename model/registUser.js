var dbUtil = require('./dbUtil.js');

module.exports = {
    insertData : function(name,belong,tel,email, callback) {
        var sql = 'insert into registUser (name, belong, tel, email) values ("';
        sql += name;
        sql += '", "';
        sql += belong;
        sql += '", "';
        sql += tel;
        sql += '", "';
        sql += email;
        sql += '");';
        console.log(sql);
        dbUtil.insert(sql, function(error) {
            return callback(error);
        });
    }
}