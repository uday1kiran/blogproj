const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: String,
    body: String
});

const BlogPost = mongoose.model('BlogPost',BlogPostSchema);//1st arg, singular name for collections in mongodb

module.exports = BlogPost
