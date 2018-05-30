var express = require('express');
var router = express.Router();
var i18n = require('i18n');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("pass route/regist.js");
  res.render('regist', { title: i18n.__('regist') });
});

router.post('/', function(req, res, next) {
  if(req.body.name == "") {
    var message = i18n.__('errorMSG.er004');
    res.render("regist", {error: message});
  }
  var a = '/confirm?name=' + req.body.name + '&belong=' + req.body.belong + '&tel=' + req.body.tel + '&email=' + req.body.email;
  res.redirect(a);
});

module.exports = router;
