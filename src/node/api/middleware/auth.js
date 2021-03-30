const mySecret = process.env['st'];
const passport = require('passport');
const localStrategy = require('passport-local').Strategy
const User = require('../models/User');

const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt

const st = process.env['st'];

passport.use('signup', new localStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, async (username, password, done) => {
  try {
    const user = await User.create({username, password});
    return done(null, user);
  } catch (e) {
    done(e);
  }
}));

passport.use('login', new localStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, async (username, password, done) => {
  try {
    const user = await User.findOne({username});

    if(!user) {
      return done(null, false, {message: 'User not found'});
    }

    const validate = await user.isValidPassword(password);

    if(!validate) {
      return done(null, false, {message: 'Wrong password'});
    }

    return done(null, user, {message: 'Login successfull'});

  } catch (e) {
    done(e);
  }
}));

passport.use(new JWTStrategy({
  secretOrKey: st,
  jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
}, async (token, done) => {
  try {
    return done(null, token.user);
  } catch(e) {
    done(error);
  }
}));

module.exports = passport