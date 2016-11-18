'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

const express = require('express');
const knex = require('../db/knex');
const User = require('../models/User');
const bcrypt = require('bcrypt-as-promised');
var router = express.Router();

// index
router.get(`/`, function(req, res) {
    console.log(`users index route is hit`);

    knex('users')
        .select('*')
        .returning('*')
        .then(function(users) {
            res.send(users);
        });
});

// new
router.get(`/new`, function(req, res) {
    res.render('../views/create_user_form')
});

// show
router.get(`/:id`, function(req, res) {
    console.log('users show route is hit');

    knex('users')
        .select('*')
        .where('id', req.params.id)
        .returning('*')
        .then(function(user) {
            res.send(user[0]);
        });
});

// create
router.post(`/`, function(req, res) {
    console.log(`users create route is hit`);

    var newUser = new User(req.body);
    newUser.postToDB(res);
});

// update
router.put(`/:id`, function(req, res) {
    console.log('users update route is hit');

    knex('users')
        .where('id', req.params.id)
        .update(req.body)
        .returning('*')
        .then(function(user) {
            res.send(user[0]);
        })
});

// delete
router.delete(`/:id`, function(req, res) {
    console.log('delete route is hit');

    knex('users')
        .where('id', req.params.id)
        .del()
        .then(function(user) {
            res.send(true)
        })
        .done();
});

module.exports = router;
