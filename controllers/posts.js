const Post = require('../models/post');

module.exports = {
    index,
    new: newPost,
    create
}

async function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    try {
        const post = await Post.create(req.body);
        res.redirect('/posts');
    } catch (err) {
        console.log(err);
        res.render('posts/new', { title: 'Create Post', errorMsg: err.message });
    }
}

function newPost(req, res) {
    res.render('posts/new', { title: 'Create Post', errorMsg: '' });
}

async function index(req, res) {
    const posts = await Post.find({});
    res.render('posts/index', { title: 'Feed', posts });
}