'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = 3000;
const app = express();

const LINKEDIN_KEY = '86tft9s9hjwsa5';
const LINKEDIN_SECRET = 'D3eYexpjUeGj786l';
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

passport.use(new LinkedInStrategy({
    clientID: LINKEDIN_KEY,
    clientSecret: LINKEDIN_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback",
    scope: ['r_emailaddress', 'r_basicprofile'],
    state: true
}, function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
        return done(null, profile);
    });
}));

app.get(`/auth/linkedin`, function(req, res) {
    passport.authenticate('linkedin'),
    function(req, res) {
        // function will not be called
    }
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.listen(PORT, function(){
  console.log(`You are using port ${PORT}`);
});
