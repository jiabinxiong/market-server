const router = require('express').Router();

const userManagementController = require('../../../controllers/user/management/user.controller');

router.post('/login', userManagementController.login);
router.post('/register', userManagementController.register);

module.exports = router;