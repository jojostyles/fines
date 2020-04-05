var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user-controller');

router.get('/', user_controller.index);

// GET request for creating User. NOTE This must come before route for userId (i.e. display user).
router.get('/create', user_controller.user_create_get);

// POST request for creating User.
router.post('/create', user_controller.user_create_post);

// GET request to delete User.
router.get('/:userId/delete', user_controller.user_delete_get);

// POST request to delete User.
router.post('/:userId/delete', user_controller.user_delete_post);

// GET request to update User.
router.get('/:userId/update', user_controller.user_update_get);

// POST request to update User.
router.post('/:userId/update', user_controller.user_update_post);

// GET request for one User.
router.get('/:userId/detail', user_controller.user_detail);

// GET request for list of all User.
router.get('/users', user_controller.user_list);

module.exports = router;
