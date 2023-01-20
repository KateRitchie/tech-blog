const { User } = require('../models');

const userData = [
    {
        username: 'Kyle',
        password: 'Whatis42'
    },
    {
        username: 'Jordan',
        password: 'Pushing8'
    },
    {
        username: 'Charlie',
        password: 'MK4life'
    },
    {
        username: 'Alex',
        password: 'TacosR8r'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;