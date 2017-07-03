var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
var User = require('../datasets/users.js');
module.exports.signup= function(req,res){
    console.log(req.body.email);
   
    var user= new User(req.body);
    user.save(function (err){
        console.log(err)
    });
    console.log("saved");
    res.json(req.body);
}
module.exports.login= function(req,res){

User.find(req.body,function(err,results){
     console.log("inside auth-contr");
     console.log("hello"+req.body+"hello");
    
    if (err){
        console.log("err");
    }else { console.log("no loop1");}
    if(results && results.length === 1)
       { 
           UserData=results[0];
           console.log("success login");
           res.json({email:UserData.email,
                     id:UserData._id});
       
       }
    else { console.log("no loop2");}
     console.log("exit auth-contr");
}
)


}

