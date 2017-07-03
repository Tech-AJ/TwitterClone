//const express =require('express');
var mongoose= require('mongoose');
var bodyParser =require('body-parser');
//const app = express();
var path = require('path');
var authenticationController = require('./server/controllers/authentication-controller.js');
var express =require('express');
var app = express();


mongoose.connect('mongodb://localhost:27017/time');

//app.use('/app', express.static(path.join(__dirname,'../app.js')));
//app.use('/node_moules',express.static(__dirname+ "../node_modules"));

app.use(bodyParser.json());
app.use('/app', express.static(__dirname + "/app" ));
app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.get('/',function(req,res){
    
res.sendFile(path.join(__dirname, 'index.html'));
//res.sendFile('index.html', { root: path.join(__dirname, '../app') });    if it is inside app folder
    //res.sendFile(path.join(__dirname, '../app', 'index.html'));           all 3 works var path = require('path'); should be used
});

app.post('/api/user/signup',authenticationController.signup);
app.post('/api/user/login',authenticationController.login);
                                             
                                        
app.listen('3000',function(){
    console.log("Listening at 3000");
});