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
router.get(`/connections`, function(req, res) {
    console.log('connections index route is hit');

    knex.queryBuilder()
        .select('u1.id as user_id','u1.first_name as user_firstname','u1.last_name as user_lastname','c.id as connection_id','c.first_name as connection_firstname','c.last_name as connection_lastname')
        .from('users as u1')
        .join('connections','u1.id','=','connections.user_id')
        .join('users as c','connections.connection_id','=','c.id')
        .then(function(users) {
            res.send(users);
        })
});

// show connections for user of given id
router.get(`/connections/:id`, function(req, res) {
    console.log('connections show route is hit');

    knex.queryBuilder()
        .select('u1.id as user_id','u1.first_name as user_firstname','u1.last_name as user_lastname','c.id as connection_id','c.first_name as connection_firstname','c.last_name as connection_lastname')
        .from('users as u1')
        .where('u1.id', req.params.id)
        .join('connections','u1.id','=','connections.user_id')
        .join('users as c','connections.connection_id','=','c.id')
        .then(function(users) {
            console.log(users);
            res.send(users);
        })
});

// create connection between two users of given id
router.post(`/connections`, function(req, res) {
    console.log('connections create route is hit');
    console.log(req.body);
    var input1 = req.body;
    var input2 = {
        user_id: req.body.connection_id,
        connection_id: req.body.user_id
    };

    knex('connections')
        .insert([input1, input2])
        .returning('*')
        .then(function(connection) {
            console.log(connection);
            res.send(connection)
        });
});

// delete connection between two users
router.delete(`/connections/:user_id/:connection_id`, function(req, res) {
    console.log('connections delete route is hit');
    console.log(req.params);
    var input1 = req.params;
    var input2 = {
        user_id: req.params.connection_id,
        connection_id: req.params.user_id
    };

    knex('connections')
        .where(input1).orWhere(input2)
        .del()
        .then(function(connection) {
            res.send(true);
        })
        .done();
});

module.exports = router;
