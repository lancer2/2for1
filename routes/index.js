var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  if(req.session.user){
    res.render('index');
  }else{
    req.session.error = "请先登录"
    res.redirect('login');
  }
});

module.exports = router;
