var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/', function(req, res, next) {
    if(req.body.userName) {
      req.session.user = {name: req.body.userName};
      res.redirect('../');
    } else {
      var err = '入力が正しくありません。確認して再入力してください。';
      res.render('login', {error: err, title: 'Login'});
    }
  });
  
  module.exports = router;