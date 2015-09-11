module.exports = function(app){


  app.get('/', function(req, res, next) {
    if(req.session.user){
      res.render('index',{'user':req.session.user});
    }else{
      req.session.error = "Error:请先登录!";
      res.render('login',{'error':req.session.error});
    }
  });
  app.get('/:hbs',function(req,res){ if(req.session.user){
      res.render(req.params.hbs,{'user':req.session.user});
    }else{
      req.session.error = "Error:请先登录!";
      res.render('login',{'error':req.session.error});
    }
  });

  app.post('/login', function(req, res) {
    var user={
      username:'admin',
      password:'admin'
    }
    if(req.body.username==user.username&&req.body.password==user.password){
      req.session.user = user;
      //取消layout
      console.log('=======post:'+user.username);
      res.send(200);
    }else{
      req.session.error = "用户名或密码不正确";
      res.send( 404 );
    }
  });
};
