'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

const LINKEDIN_KEY = '86tft9s9hjwsa5';
const LINKEDIN_SECRET = 'D3eYexpjUeGj786l';
const express = require('express');
const request = require('request');
// const knex = require('../knex');
const User = require('../models/user')
var router = express.Router();

var scope = ['r_basicprofile', 'r_emailaddress'];

var Linkedin = require('node-linkedin')(LINKEDIN_KEY, LINKEDIN_SECRET);

Linkedin.auth.setCallback('http://localhost:3000/');

var linkedin = Linkedin.init('my_access_token');

router.get('/linkedin', function(req, res) {
    // This will ask for permisssions etc and redirect to callback url.
    Linkedin.setCallback(req.protocol + '://' + req.headers.host + '/oauth/linkedin/callback')
    Linkedin.auth.authorize(res, scope);
});

router.get('/linkedin/callback', function(req, res) {
    console.log(`oauth get request is hit`);
    Linkedin.auth.getAccessToken(res, req.query.code, req.query.state, function(err, results) {
        if (err) return console.error(err);

        var accessToken = results;
        var options = {
            url: 'https://api.linkedin.com/v1/people/~:(id,first-name,last-name,maiden-name,headline,location,industry,current-share,summary,specialties,positions,picture-url,picture-urls,email-address)?format=json',
            headers: {
                Connection: 'Keep-Alive',
                authorization: `Bearer ${results.access_token}`
            }
        };
        var newUser = new User("")
        request(options, function(error, response, body) {
            var bodyJson = JSON.parse(body);
            var newUser = new User({
                linkedinId: bodyJson.id,
                firstName: bodyJson.firstName,
                headline: bodyJson.headline,
                lastName: bodyJson.lastName,
                industry: bodyJson.industry,
                pictureUrl: bodyJson.pictureUrl,
                emailAddress: bodyJson.emailAddress,
                password: `asdfjklwlkewijorbhoqwarijgvjwkqlgwijejifejk;fkljadj;kfqwjef`
            });
            newUser.postToDB(res);
            // res.redirect(`/users/search/contact`)
            // res.render("../views/create_user_linkedin_form", {
            //     newUser: newUser
            // });
        })
    });
});

module.exports = router;
