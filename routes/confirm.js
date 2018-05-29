var express = require('express');
var router = express.Router();
var url = require('url');
var registUser = require('../model/registUser')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("pass route/confirm.js");
  var urlParam = url.parse(req.url, true);
  res.render('confirm', { title: '確認画面',  
                          name: urlParam.query.name, 
                          belong: urlParam.query.belong, 
                          tel: urlParam.query.tel, 
                          email: urlParam.query.email })
});

router.post('/', function(req, res, next) {
  console.log("pass post of route/confirm.js");
  registUser.insertData(req.body.name, req.body.belong, req.body.tel, req.body.email, function(error) {
    if (error) {
      var a = '/confirm?name=' + req.body.name + '&belong=' + req.body.belong + '&tel=' + req.body.tel + '&email=' + req.body.email;
      res.redirect(a);
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
