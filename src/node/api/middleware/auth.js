//Imports for passport and User moongose schema
const passport = require('passport');
const localStrategy = require('passport-local').Strategy
const User = require('../models/User');

//Implemeting JWT + passport strategies
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt

//st stands for secret_token, it's used for JWT encode generation
//const st = process.env['st'];
const st = 'solar_software';

//Middleware for signup using passport
passport.use('signup', new localStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, async(username, password, done) => {
    try {
        const user = await User.create({ username, password });
        return done(null, user);
    } catch (e) {
        done(e);
    }
}));

//Middleware for login using passport
passport.use('login', new localStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, async(username, password, done) => {
    try {
        const user = await User.findOne({ username });

        if (!user) {
            return done(null, false, { message: 'User not found' });
        }

        const validate = await user.isValidPassword(password);

        if (!validate) {
            return done(null, false, { message: 'Wrong password' });
        }

        return done(null, user, { message: 'Login successfull' });

    } catch (e) {
        done(e);
    }
}));

//Returns a JWT when auth is sucessful
passport.use(new JWTStrategy({
    secretOrKey: st,
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
}, async(token, done) => {
    try {
        return done(null, token.user);
    } catch (e) {
        done(error);
    }
}));

//Exporting passport config
module.exports = passport