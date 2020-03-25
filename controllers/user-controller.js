/*
* User Controller for handling user requests
*
*/
var MongoUser = require('../database/user-mongo');

// User index
exports.index = function(req, res, next){
    res.send('User index');
};

// Display list of all Users
exports.user_list = function(req, res, next){
    MongoUser.get_list_of_users(function(err, list_users){
        if (err){
            next(err);
        } else {
            res.send(list_users);
        }
    });
};

// Display detail page for a specific User
exports.user_detail = function (req, res, next){
    MongoUser.get_user_detail(req.params.userId, function(err, user_details){
        if (err) {
            next(err);
        } else {
            res.send(user_details);
        }
    });
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
