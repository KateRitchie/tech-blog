const { Comment } = require('../models');

const commentData = [
    {
        comment_description: 'Coding is hard',
        user_id: 1,
        post_id: 1
    },
    {
        comment_description: 'MySQL is a great database software',
        user_id: 2,
        post_id: 2
    },
    {
        comment_description: 'JavaScript is a scripting language',
        user_id: 3,
        post_id: 3
    },
    {
        comment_description: 'MVC is an architectual pattern',
        user_id: 4,
        post_id: 4
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
