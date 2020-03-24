/*
Implements the communication for a mongo database implementation
*/
var MongoUser = require('../models/User');

// Gets the list of all users from the database
exports.list_of_users = function(callback){
    MongoUser.find({}, '')
        .exec(function (err, list_users) {
            callback(err, list_users);
        });
};
