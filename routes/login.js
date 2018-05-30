var express = require('express');
var router = express.Router();
var i18n = require('i18n');
var util = require('util');



/* GET home page. */
router.get('/', function(req, res, next) {
  var title = i18n.__('common.login');
  res.render('login', { title: title });
});

router.post('/', function(req, res, next) {
    if(req.body.userName) {
      if(req.body.userName == "123") {
        req.session.user = {name: req.body.userName};
        res.redirect('../');
      } else {
        var err = util.format(i18n.__('errorMSG.er001'), req.body.userName);
        var title = i18n.__('common.login');
        res.render('login', {error: err, title: title});
      }
    } else {
      var err = i18n.__('errorMSG.er003');
      var title = i18n.__('common.login');
      res.render('login', {error: err, title: title});
    }
  });
  
  module.exports = router;