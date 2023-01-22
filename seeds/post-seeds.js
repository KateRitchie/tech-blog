const { Post } = require('../models');

const postData = [
    {
        title: 'Will I make it in the field?',
        description: 'There is more to coding than I thought',
        user_id: 1
    },
    {
        title: 'Database Software',
        description: 'What is your favorite database software to use?',
        user_id: 2
    },
    {
        title: 'What kind of scripting languages are used?',
        description: 'Python is a language, what others are there?',
        user_id: 3
    },
    {
        title: 'Favorite architectual solutions',
        description: 'Flux',
        user_id: 4
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;