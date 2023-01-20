const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Coding is hard',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'MySQL is a great database software',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'JavaScript is a scripting language',
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: 'MVC is an architectual pattern',
        user_id: 4,
        post_id: 4
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
