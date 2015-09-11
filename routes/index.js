module.exports = function (app) {


    app.get('/', function (req, res, next) {
        if (req.session.user) {
            res.render('index', {'user': req.session.user});
        } else {
            res.render('login', {'error': "Error:请先登录!"});
        }
    });
    app.get('/:hbs', function (req, res) {
        if (req.session.user) {
            res.render(req.params.hbs, {'user': req.session.user});
        } else {
            res.render('login', {'error': "Error:请先登录!"});
        }
    });

    app.post('/login', function (req, res) {
        var user = {
            username: 'admin',
            password: 'admin'
        }
        if (req.body.username == user.username && req.body.password == user.password) {
            req.session.user = user;
            //取消layout
            res.send(200);
        } else {
            res.json({ "error": "用户名或密码错误" });
            res.send(200);
        }
    });
};
