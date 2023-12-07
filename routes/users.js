var express = require('express');
var router = express.Router();

const usersCtrl = require('../controllers/users');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/users', usersCtrl.index);
router.get('/users/:id', usersCtrl.show);


module.exports = router;

