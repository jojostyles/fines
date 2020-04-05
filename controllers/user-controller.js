/*
* User Controller for handling user requests
*
*/
var UserMongo = require('../database/user-mongo').UserMongo;
const mongoose = require('mongoose');
const mongoDBUrl = process.env.MONGODB_URI || process.env.DEV_DB_URL;
var connection = mongoose.createConnection(
    mongoDBUrl,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

UserMongo = new UserMongo(connection);

// User index
exports.index = function(req, res, next){
    res.send('User index');
};

// Display list of all Users
exports.user_list = async function(req, res, next){
    try {
        let users = await UserMongo.get_list_of_users();
        res.send(users);
    } catch (err) {
        next(err);
    }
};

// Display detail page for a specific User
exports.user_detail = async function (req, res, next){
    try {
        let user = await UserMongo.get_user_detail(req.params.userId);
        res.send(user);
    } catch (err) {
        next(err);
    }
};

// Display User create form on GET
exports.user_create_get = function (req, res, next){
    res.send('NOT Implemented: User create GET');
};

// Display User create form on GET
exports.user_create_post = function (req, res, next) {
    res.send('NOT Implemented: User create POST');
};

// Display User delete get
exports.user_delete_get = function (req, res, next) {
    res.send('NO Implemented: User delete GET');
};

// Handle User delete post
exports.user_delete_post = function (req, res, next){
    res.send('NO Implemented: User delete post');
};

// Display User update on POST
exports.user_update_get = function (req, res, next) {
    res.send('NOT Implemented: User update GET');
};

// Handle User update on POST
exports.user_update_post = function (req, res, next){
    res.send('NOT Implemented: User update POST');
};
