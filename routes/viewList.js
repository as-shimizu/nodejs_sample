var express = require('express');
var router = express.Router();
var registUser = require('../model/registUser');
var i18n = require('i18n');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("pass route/viewList.js");
  registUser.selectAll(function(error, result) {
    if(error) {
        var message = i18n.__('errorMSG.er002');
        res.render('index', { title: 'Home', error: message});
    } else {
        console.log(result);
        var name = [];
        var belong = [];
        var tel = [];
        var email = [];
        for(var i=0; i < result.rows.length; i++) {
            name.push(result.rows[i].name);
            belong.push(result.rows[i].belong);
            tel.push(result.rows[i].tel);
            email.push(result.rows[i].email);
        }
        res.render('viewList', { title: i18n.__('common.see list'),
                                 name: name, belong: belong, tel: tel, email: email
        });
    }
  });
});

module.exports = router;