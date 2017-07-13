var mongoose = require('mongoose');
//mongoose.Promise = Promise;
module.exports= mongoose.model('Users',{
     email: String,
    username: String,
    password: String,
    image: String,
    bio: String,
    following: [{userId: String}],
	followers: [{userId: String}]
})
