const User = require('../models/user');
const Post = require('../models/post')

module.exports = {
    show,
    index
}

async function index(req, res) {
    res.render('users/index', { title: 'Search For a Profile' });
}

async function show(req, res) {
    const userPosts = await Post.find({ user: req.params.id });
    const pageUser = await User.findById(req.params.id);
    res.render('users/show', { title: `${pageUser.name}'s Profile`, pageUser, userPosts });
}

