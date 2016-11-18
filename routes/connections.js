'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

const Connection = require('../models/Connection');
const express = require('express');
const knex = require('../db/knex');
var router = express.Router();

// index
router.get(`/`, function(req, res) {
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
router.get(`/:id`, function(req, res) {
    console.log('connections show route is hit');

    knex.queryBuilder()
        .select('u1.id as user_id','u1.first_name as user_firstname','u1.last_name as user_lastname','c.id as connection_id','c.first_name as connection_firstname','c.pic_url','c.email','c.last_name as connection_lastname')
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
router.post(`/`, function(req, res) {
    console.log('connections create route is hit');

    var input = {
        userId: Number(req.body.user_id),
        connectionId: Number(req.body.connection_id)
    }

    var connection = new Connection(input);

    connection.postToDB(res);
});

// delete connection between two users
router.delete(`/:user_id/:connection_id`, function(req, res) {
    console.log('connections delete route is hit');

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
