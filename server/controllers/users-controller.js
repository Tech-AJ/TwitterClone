var Users = require('../datasets/users');
module.exports.getUsers = function(req, res){
	Users.find({}, function(err, usersData){
		if (err){
			res.error(err);
		} else {
			res.json(usersData);
		}
	})
}

module.exports.followUser = function(req, res){
	var userId = req.body.userId,
		tweeterId = req.body.tweeterId;
 //console.log(":user" + userId+"")  ;
   

    	Users.findById(tweeterId, function(err, tweeter){
		tweeter.followers.push({userId: userId});
		tweeter.save();
	})
	
	Users.findById(userId, function(err, follower){
		follower.following.push({userId: tweeterId});
		follower.save(function(){
                  res.json(follower);    
                      });  
	})    
}

module.exports.unfollowUser = function(req, res){
	var userId = req.body.userId,
		tweeterId = req.body.tweeterId;

         Users.findByIdAndUpdate(tweeterId,{"$pull":{"followers":{"userId":(userId)}}}, { safe: true,new: true }, function(err,tweeter) {
        if(err) {console.log(err);
                  res.error(err);
                 }
           })
    
    Users.findByIdAndUpdate(userId,{"$pull":{"following":{"userId":(tweeterId)}}}, { safe: true,new: true }, function(err,follower) {
        if(err) {console.log(err);
                  res.error(err);
                 }
            else
               { console.log(follower);
                res.json(follower);
                  }
	})
}