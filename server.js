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

var scope = ['r_basicprofile'];

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

        var accessToken = results;

        return res.redirect('/');
    });
});



app.get("/", function(req,res){
  res.render('../views/index');
});

app.listen(PORT, function(){
  console.log(`You are using port ${PORT}`);
});
