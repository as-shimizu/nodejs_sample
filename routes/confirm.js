var express = require('express');
var router = express.Router();
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("route/confirm.js");
  var urlParam = url.parse(req.url, true);
  console.log(urlParam);
  res.render('confirm', { title: '確認画面',  
                          name: urlParam.query.name, 
                          belong: urlParam.query.belong, 
                          tel: urlParam.query.tel, 
                          email: urlParam.query.email })
});

module.exports = router;
