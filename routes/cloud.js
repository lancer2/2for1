var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cloud', function(req, res, next) {
  res.render('cloud', { title: 'Cloud' });
});

module.exports = router;
