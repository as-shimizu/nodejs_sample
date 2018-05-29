var dbUtil = require('./dbUtil.js');

module.exports = {
    insertData : function(name,belong,tel,email) {
        var sql = 'insert into regist_user (user_name, belong, tel, email) values ("';
        sql += name;
        sql += '", "';
        sql += belong;
        sql += '", "';
        sql += tel;
        sql += '", "';
        sql += email;
        sql += '");';
        console.log(sql);
        var result = dbUtil.insert(sql);
        return result;
    }
}