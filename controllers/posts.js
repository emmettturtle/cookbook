const Post = require('../models/post');
const OpenAI = require('openai');

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

    
    const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

    const image = await openai.images.generate({model: 'dall-e-2', prompt: req.body.description});
    // image_url = response.data.data[0].url;
    // console.log(image.data);
    req.body.imageUrl = image.data[0].url;
    
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
    let posts = await Post.find({});
    if (posts) {
        posts = posts.reverse();
    }
    res.render('posts/index', { title: 'Feed', posts });
}