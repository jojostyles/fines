/*
* Implements the communication for a mongo database implementation
*
*/
var UserModel = require('../models/user').UserModel;

module.exports.UserMongo = class UserMongo {
    constructor(connection){
        this.UserModel = UserModel(connection);
    }

    /**
     * Returns a list of all users.
     */
    async get_list_of_users(){
        let users = await this.UserModel.find({}, '').exec();
        return users;
    }

    /**
     * Returns all properties of a user if userId exists, else it returns null
     * @param {number} userId
     */
     async get_user_detail(userId) {
        let user = await this.UserModel.findOne({_id: userId}, '');
        return user;
    }
};
