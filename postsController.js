var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var PostSchema = mongoose.Schema({
    title: String,
    body: String
});
var Post = mongoose.model('Post', PostSchema);

const findPost = (req, res) => {
    console.log("in find post")
    console.log(req.params.id)
    var id = mongoose.Types.ObjectId(req.params.id);
    Post.findById(id, function(err, post) {
        if (err) {
            console.log('in errorxx')
            res.status(500).json({ err })
        } else {
            console.log('got successfully')
            res.render('post', { post: post })
            return
        }
    })
}

const createPost = (req, res) => {
    console.log("in create post")
    newPost = new Post({ title: "post1", body: "hello post 1" })
    newPost.save(function(err, post) {
        if (err) {
            console.log('in error')
            res.status(500).json({ err })
        } else {
            console.log('saved successfully')
            res.status(201).json({ "post": newPost })
        }
    })
}

module.exports = {
    createPost,
    findPost
}