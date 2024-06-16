const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const LocalStrategy = require('passport-local').Strategy;
const env = require('dotenv').config();
const User = require('../database/models/user'); // Adjust the path if necessary
const bcrypt = require('bcryptjs');


passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/callback",
    // callbackURL: "https://travel-planner-lhay.onrender.com/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    //Do this later

    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });

    return done(null, profile);
  }
));


passport.use(new LocalStrategy(
  { usernameField: 'email' },
  async (email, password, done) => {
      try {
          const user = await User.findOne({ email });
          if (!user) {
              return done(null, false, { message: 'Incorrect email.' });
          }

          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
              return done(null, false, { message: 'Incorrect password.' });
          }

          return done(null, user);
      } catch (err) {
          return done(err);
      }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
      const user = await User.findById(id);
      done(null, user);
  } catch (err) {
      done(err);
  }
});

const authController = {};

authController.isLoggedIn = (req, res, next) => {
  req.user ? next() : res.redirect('/auth/failure');
}
module.exports = { passport, authController };
