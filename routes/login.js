var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('login');
})
router.post('/', function(req, res, next) {
  var user={
    username:'admin',
    password:'admin'
  }
  if(req.body.username==user.username&&req.body.password==user.password){
    req.session.user = user;
    res.render('index');
  }else{
    req.session.error = "用户名或密码不正确";
    res.send( 404 );
  }
});

module.exports = router;
