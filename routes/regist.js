var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("pass route/regist.js");
  res.render('regist', { title: 'Add New' });
});

router.post('/', function(req, res, next) {
  var a = '/confirm?name=' + req.body.name + '&belong=' + req.body.belong + '&tel=' + req.body.tel + '&email=' + req.body.email;
  res.redirect(a);
});

module.exports = router;
