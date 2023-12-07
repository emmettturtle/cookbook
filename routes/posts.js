var express = require('express');
var router = express.Router();

const postsCtrl = require('../controllers/posts');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const posts = require('../controllers/posts');

router.get('/', postsCtrl.index);
router.get('/new', ensureLoggedIn, postsCtrl.new);
router.get('/:id', postsCtrl.show);

router.delete('/:id', ensureLoggedIn, postsCtrl.delete);

router.post('/', ensureLoggedIn, postsCtrl.create);



module.exports = router;
