'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

const express = require('express');
const knex = require('../db/knex');
var router = express.Router();

// index
router.get(`/`, function(req, res) {
    knex('users')
        .select('*')
        .returning('*')
        .then(function(users) {
            res.send(users);
        });
});

// new
router.get(`/new`, function(req, res) {
    console.log(req.body);
});

// show
router.get(`/:id`, function(req, res) {
    knex('users')
        .select('*')
        .where('id',req.params.id)
        .returning('*')
        .then(function(user) {
            res.send(user);
        });
});

module.exports = router;
