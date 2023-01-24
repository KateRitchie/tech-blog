const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth')


// All posts for homepage
router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            include: [{
				model: User,
				attributes: ['username'],
			},],
		});
        const posts = dbPostData.map(post => post.get({ plain: true }));

        res.render('homepage', { posts, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

// Single post
router.get('/post/:id', async (req, res) => {
    try {
        const dbPostData = await Post.findByPk(req.params.id, {
                include: [
                    {
                        model: User,
                        attributes: ['username'],
                    }, {
                        model: Comment,
                        include: {
                            model: User,
                             attributes: ['username']
                    }
                }
                ],
            });
        const posts = dbPostData.get({ plain: true });
        console.log({ ...posts, loggedIn: req.session.loggedIn })
        console.log({ posts, loggedIn: req.session.loggedIn })
        res.render('post', { ...posts, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

//Dashboard - must be signed in or redirected to sign up/log in

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const dbUserData = await User.findByPk(req.session.user_id, {
            attributes: {
                exclude: ['password']
            },
            include: [{
                model: Post
            }],
        });

        const user = dbUserData.get({ plain: true });
        res.render('dashboard', { ...user, loggedIn: true});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;