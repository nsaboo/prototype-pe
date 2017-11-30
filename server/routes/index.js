const router = require('express').Router();
const controller = require('../controllers');

// user routes
router.get('/user', controller.user.get);
router.post('/user', controller.user.post);

module.exports = router;
