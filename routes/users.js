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
            console.log('do I get here?');
            res.send(users)
        });
});

router.get(`/users/:id`, function(req, res) {
    // this should be the show request
});

module.exports = router;
