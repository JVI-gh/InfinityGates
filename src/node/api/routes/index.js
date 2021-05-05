//Import for express, and making router
const express = require('express');
const router = express.Router();

//st stands for secret_token, it's used for enconding JWT
//const st = process.env['st'];
const st = 'solar_software';

//Importing passport middleware for routes
const passport = require('passport');
//Importing JWT for client-server interaction
const jwt = require('jsonwebtoken');

//Dummy text just to visually check if server is working when going to it's host direction
router.get('/', function(req, res, next) {
    res.send('Working');
});

//Signup route
router.post('/signup', passport.authenticate('signup', { session: false }), async(req, res, next) => {
    res.json({
        message: 'Signup successful',
        user: req.user
    });
});

//Login route
router.post('/login', async(req, res, next) => {
    passport.authenticate('login', async(err, user, info) => {
        try {
            if (err || !user) {
                const error = new Error('New Error');
                return next(error);
            }
            req.login(user, { session: false }, async(err) => {
                if (err) return next(err);
                const body = { _id: user._id, username: user.username }

                const token = jwt.sign({ user: body }, st);
                return res.json({ token });
            })
        } catch (e) {
            return next(e)
        }
    })(req, res, next);
});

//Main manu route, JWT auth is needed to access
router.get('/main', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({
        message: 'Working as intended',
        user: req.user,
        token: req.query.secret_token,
    });
});

module.exports = router;