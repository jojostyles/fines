/*
* Implements the communication for a mongo database implementation
*
*/
var User = require('../models/user');

// Gets the list of all users from the database
exports.get_list_of_users = function(callback){
    User.find({}, '')
        .exec(function (err, list_users) {
            callback(err, list_users);
        });
};

// Returns user detail for a specific user
exports.get_user_detail = function(userId, callback){
    User.find({_id: userId}, '')
        .exec(function (err, user_detail){
            callback(err, user_detail);
        });
};
