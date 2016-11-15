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
var accessToken;
var scope = ['r_basicprofile'];
// const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

var Linkedin = require('node-linkedin')(LINKEDIN_KEY, LINKEDIN_SECRET);

Linkedin.auth.setCallback('http://localhost:3000/');

var linkedin = Linkedin.init('my_access_token');

app.get('/oauth/linkedin', function(req, res) {
    // This will ask for permisssions etc and redirect to callback url.
    Linkedin.setCallback(req.protocol + '://' + req.headers.host + '/oauth/linkedin/callback')
    Linkedin.auth.authorize(res, scope);
    console.log("header", req.headers.host);
    console.log("req.protocol", req.protocol);
});

app.get('/oauth/linkedin/callback', function(req, res) {
    Linkedin.auth.getAccessToken(res, req.query.code, req.query.state, function(err, results) {
        if ( err )
            return console.error(err);
        console.log(results);
        return res.redirect('/');
    });
});
// passport.use(new LinkedInStrategy({
//     clientID: LINKEDIN_KEY,
//     clientSecret: LINKEDIN_SECRET,
//     callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback",
//     scope: ['r_emailaddress', 'r_basicprofile'],
//     state: true
// }, function(accessToken, refreshToken, profile, done) {
//     // asynchronous verification, for effect...
//     process.nextTick(function () {
//         return done(null, profile);
//     });
// }));
//
// app.get(`/auth/linkedin`, function(req, res) {
//   console.log("hello")
//     passport.authenticate('linkedin'),
//     function(req, res) {
//         // function will not be called
//     }
// });
//
// app.get('/auth/linkedin/callback',
//   passport.authenticate('linkedin', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });



app.get("/", function(req,res){
  res.render('../views/index');
});

app.listen(PORT, function(){
  console.log(`You are using port ${PORT}`);
});

// https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=86tft9s9hjwsa5&state=q7_a5f1Y4S-Z_687&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Foauth%2Flinkedin&scope=r_basicprofile%20
//
// https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=86tft9s9hjwsa5&state=WH4pQOUL7OPd8dK9&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Foauth%2Flinkedin&scope=r_basicprofile%20r_fullprofile%20r_emailaddress%20r_network%20r_contactinfo%20rw_nus%20rw_groups%20w_messages#!
