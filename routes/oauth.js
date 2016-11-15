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
var router = express.Router();

var scope = ['r_basicprofile'];

var Linkedin = require('node-linkedin')(LINKEDIN_KEY, LINKEDIN_SECRET);

Linkedin.auth.setCallback('http://localhost:3000/');

var linkedin = Linkedin.init('my_access_token');

router.get('/linkedin', function(req, res) {
    // This will ask for permisssions etc and redirect to callback url.
    Linkedin.setCallback(req.protocol + '://' + req.headers.host + '/oauth/linkedin/callback')
    Linkedin.auth.authorize(res, scope);
    console.log("header", req.headers.host);
    console.log("req.protocol", req.protocol);
});

router.get('/linkedin/callback', function(req, res) {
    console.log(`oauth get request is hit`);
    Linkedin.auth.getAccessToken(res, req.query.code, req.query.state, function(err, results) {
        if (err) return console.error(err);

        var accessToken = results;
        console.log(results);
        var options = {
            url: 'https://api.linkedin.com/v1/',
            headers: {
                Connection: 'Keep-Alive',
                authorization: `Bearer ${results.access_token}`
            }
        };
        //
        request(options,function(error, response, body) {
            console.log(`this request thing works`);
            console.log(results);
            res.send(body);
        })

        // return res.redirect('/');
    });
});

module.exports = router;
