var express = require('express');
var app=require('../app');
var router = express.Router();
var User=require('../model/user');
var crypto=require('crypto');
var jwt=require('jsonwebtoken');
var settings=require('../settings');
/* GET home page. */
// var arr=require('../bin/www').arr;
// console.log(arr);
router.get('/', function(req, res) {
    // res.redirect('/index');

    if(req.session.user!=null){
       return res.redirect('chat');
    }
    // if(userId!=null){
    //     res.render('chat',{title:userId});
    // }
    res.redirect('index');
    // res.render('index',{title:'请登录'});

});
router.get('/index',function (req,res) {
        return res.render('index',{title:"请登录"});
});
router.post('/index',function (req,res) {
    // console.log(req.body.id);
    // res.send(req.body.password);
    var md5 = crypto.createHash('md5'),
        password = md5.update(req.body.password).digest('hex');
    // var user=new User({id:req.body.id,password:password,token:null});
    User.get(req.body.id,function (err,user){
        if(!user){file:///Users/makisucruse/Desktop/jquerytest.html
            console.log('不存在');
            return res.redirect('/');
        }
        // if(user.password!=password){
        //     res.render('index');
        // }
        req.session.user=user;
        //这里也需要传递id..
        console.log('a user connected'+':'+res.socket.id);
         return  res.redirect('chat');
        // res.render('chat',{title:req.session.user.id});
    })
});
router.get('/chat',function (req,res) {
  //页面控制,登陆后才能看到
  if(req.session.user==null){
        res.render('index',{title:"请登录"});
  }
    res.render('chat',{title:req.session.user.id});

});
router.get('/test',function (req,res) {
    return res.render('test');
});
router.get('/register',function (req,res) {
    res.render('register');
});
router.post('/register',function (req,res) {
   var id=req.body.id,
       password=req.body.password,
       repassword=req.body['repeat-password'];
       if(password!=repassword){
           console.log('password not right');
           res.render('register');
       }
    var md5 = crypto.createHash('md5'),
        password = md5.update(req.body.password).digest('hex');
    //token 有效期两个小时
    var token=jwt.sign({id:req.body.id,password:password},settings.cookieSecret,{expiresIn:7200000});
    var user={id:req.body.id,password:password,token:token};
    var userInfo=new User({id:req.body.id,password:password,token:token});
    User.get(userInfo.id,function (err,user) {
        if(err){
            return res.render('index');
        }
        if(user){
            console.log('用户已经存在,重新注册..');
            return res.render('register');
        }
        userInfo.save(function (err,user) {
            if(err){
                return res.render('register');
            }
            // req.setRequestHeader('token',token);
            req.session.user=userInfo;
            // res.redirect('/chat');
            return  res.redirect('chat');
        })
    })
});
router.post('/chat',function (req,res) {

});

router.get('/logout',function (req,res) {
    console.log('here');
    req.session.user=null;
    res.render('index',{title:'已登出'});
});

router.get('/data',function (req,res) {
    // console.log(onLineList);
    // return res.send('dsada');
    console.log(arr.toString()+'....');
    return res.send(arr.toString());
});

module.exports = router;
