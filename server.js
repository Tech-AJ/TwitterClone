//const express =require('express');
var mongoose= require('mongoose');
var bodyParser =require('body-parser');
//const app = express();
var path = require('path');
var authenticationController = require('./server/controllers/authentication-controller.js');
var profileController = require('./server/controllers/profile-controller');
var tweetController = require('./server/controllers/tweet-controller.js');
var usersController = require('./server/controllers/users-controller');
var express =require('express');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var app = express();


mongoose.connect('mongodb://localhost:27017/time');

//app.use('/app', express.static(path.join(__dirname,'../app.js')));
//app.use('/node_moules',express.static(__dirname+ "../node_modules"));

app.use(bodyParser.json());
app.use('/app', express.static(__dirname + "/app" ));
app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use('/uploads',express.static(__dirname + "/uploads"));
app.use('/uploads', express.static(__dirname + "/uploads"));
app.get('/',function(req,res){
    
res.sendFile(path.join(__dirname, 'index.html'));
//res.sendFile('index.html', { root: path.join(__dirname, '../app') });    if it is inside app folder
    //res.sendFile(path.join(__dirname, '../app', 'index.html'));           all 3 works var path = require('path'); should be used
});

app.post('/api/user/signup',authenticationController.signup);
app.post('/api/user/login',authenticationController.login);
                                             
//Profile
app.post('/api/profile/editPhoto', multipartMiddleware, profileController.updatePhoto);
app.post('/api/profile/updateUsername', profileController.updateUsername);
app.post('/api/profile/updateBio', profileController.updateBio);                                    //Tweets  
app.post('/api/tweet/post',tweetController.postTweet);
app.post('/api/tweet/get',tweetController.getTweet);

app.get('/api/users/get', usersController.getUsers);
app.post('/api/users/follow', usersController.followUser);
app.post('/api/users/unfollow', usersController.unfollowUser);

app.listen('3000',function(){
    console.log("Listening at 3000");
});