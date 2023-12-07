const Post = require('../models/post');

module.exports = {
    index,
    new: newPost,
    create,
    show,
    delete: deletePost,
    update
}

//not working and I dont know why

async function update(req, res) {
    const post = await Post.findById(req.params.id);
    //if they had already liked the post, remove them from the likes
    //otherwise add them to the likes
    const idIdx = post.usersLiked.findIndex(userId => userId.equals(req.user._id));
    if(idIdx >= 0) { // findIndex returns -1 if it cant find anything that matches the callback conditional
        post.usersLiked.splice(idIdx, 1);  
    } else {
        post.usersLiked.push(req.user._id);
    }
    await post.save();
    res.redirect(`/posts/${post._id}`);
}

async function deletePost(req, res) {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/');
}

async function show(req, res) {
    const post = await Post.findById(req.params.id);
    res.render('posts/show', { title: 'Post Details', post });
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