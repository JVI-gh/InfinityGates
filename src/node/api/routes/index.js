const express = require('express');
const router = express.Router();
const st = process.env['st'];

const passport = require('passport');
const jwt = require('jsonwebtoken');


router.get('/', function(req, res, next) {
  res.send('Working');
});

router.post('/signup', passport.authenticate('signup', { session: false }), async (req, res, next) => {
  res.json({
    message: 'Signup successful',
    user: req.user
  });
});

router.post('/login', async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error('New Error');
        return next(error);
      }
      req.login(user, { session: false }, async (err) => {
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

router.get('/main', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  console.log(req.query.secret_token);
  res.json({
    message: 'Working as intended',
    user: req.user,
    token: req.query.secret_token,
  });
});

module.exports = router;