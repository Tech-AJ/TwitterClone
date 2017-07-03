var mongoose = require('mongoose');
//mongoose.Promise = Promise;
module.exports= mongoose.model('Users',{
    email:String,
    password:String
})
