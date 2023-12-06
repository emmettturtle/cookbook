const Posts = require('../models/post');

module.exports = {
    create
}

async function create(req, res) {
    const post = await Posts.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    post.comments.push(req.body);
    try {
        await post.save();
    } catch (err) {
        console.log(err);
    }

    res.redirect(`/posts/${post._id}`);
}