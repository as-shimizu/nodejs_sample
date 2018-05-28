var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/comfirm', function(req, res, next) {
  res.render('comfirm', { title: 'Comfirm' });
});

module.exports = router;
