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
     
    
    if (err){
        console.log("err");
        res.json({status: 200});
    }
    else if (results && results.length === 1)
       { 
           UserData=results[0];
           console.log("success login");
           res.json({email:UserData.email,
                     _id:UserData._id,
                     username: UserData.username,
                      image: UserData.image,
                      following: UserData.following,
					  followers: UserData.followers});
       
       }
  
}
)


}

