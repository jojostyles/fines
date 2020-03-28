/*
* Implements the communication for a mongo database implementation
*
*/
var UserModel = require('../models/user').UserModel;

module.exports.UserMongo = class UserMongo {
    constructor(connection){
        this.UserModel = UserModel(connection);
    }

    get_list_of_users(callback){
        this.UserModel.find({}, '')
            .exec(function (err, list_users) {
                callback(err, list_users);
            });
    }

    get_user_detail(userId, callback) {
        this.UserModel.findOne({ _id: userId }, '')
            .exec(function (err, user_detail) {
                callback(err, user_detail);
            });
    }
};
