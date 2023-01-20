// import models
const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./User');

User.hasMany(Post);

Post.belongsTo(User);

Post.hasMany(Comment);

Comment.belongsTo(Post);

User.hasMany(Comment);

Comment.belongsTo(User);

module.exports = { Post, Comment, User };
