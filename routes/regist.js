var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('regist', { title: '新規登録' });
});

module.exports = router;
