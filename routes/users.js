'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

const express = require('express');
const knex = require('../db/knex');
var router = express.Router();

router.get(`/`, function(req, res) {
    knex('users')
        .select('*')
        .returning('*')
        .then(function(users) {
            res.send(users);
        });
});

router.get(`/new`, function(req, res) {
    // console.log(req.body);
});

router.get(`/:id`, function(req, res) {
    knex('users')
        .select('*')
        .where('id',req.params.id)
        .returning('*')
        .then(function(user) {
            // console.log(user);
            res.send(user[0]);
        });
});

router.post(`/`, function(req, res) {
    console.log(`post route is hit`);
    console.log(`\n\nreq.body is`);
    console.log(req.body);
    knex('users')
        .insert(req.body)
        .returning('*')
        .then(function(user) {
            console.log(user);
            res.send(user[0]);
        })
        .catch(function(err) {
            console.log('post error: ' + err);
        })
});

module.exports = router;
