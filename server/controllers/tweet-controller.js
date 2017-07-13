var Tweet = require('../datasets/tweets');
module.exports.postTweet = function(req,res){
    
   
    var tweet = new Tweet(req.body);
    tweet.save(function(err){
    
    Tweet.find({})
        .sort({date: -1}).exec(function(err, allTweets){
        if (err){
            res.error(err);
        } else { 
           
             res.json(allTweets);
            
        }
    });
});
    
}


module.exports.getTweet =function(req,res){
  //    console.log(req.body);
    Tweet.find({})
        .sort({date: -1}).exec(function(err, allTweets){
        if (err){
            res.error(err);
        } else { 
            
             res.json(allTweets);
            
        }
    });
    
    
}

