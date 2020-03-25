/*
* Implements the communication for a mongo database implementation
*
*/
var User = require('../models/user');

// Gets the list of all users from the database
exports.list_of_users = function(callback){
    User.find({}, '')
        .exec(function (err, list_users) {
            callback(err, list_users);
        });
};
