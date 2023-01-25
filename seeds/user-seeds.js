const { User } = require('../models');

const userData = [
    {
        username: 'Kyle',
        password: 'password'
    },
    {
        username: 'Jordan',
        password: 'password'
    },
    {
        username: 'Charlie',
        password: 'password'
    },
    {
        username: 'Alex',
        password: 'password'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;