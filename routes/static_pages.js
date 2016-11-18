'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

const express = require("express");
const knex = require('../db/knex');
const router = express.Router();

router.get("/form/create_user", function(req, res) {
    // res.send("working");
    res.render("../views/create_user_form");
});

router.get(`/show_connections/:id`, function(req, res) {
    res.render(`../views/display_connections`, {
        userid: req.cookies.token.id
    });
});

router.get("/users/search/contact", function(req, res) {
    console.log(`render display profiles route hit`);
    console.log(`userid in cookie is ${req.cookies.token.id}`);
    res.render("../views/display_profiles", {
        userid: req.cookies.token.id
    });
});

router.get("/users/edit/profile", function(req, res) {
    console.log(`render edit profile route hit`);

    knex("users").where("id", req.cookies.token.id)
        .then(function(user) {
            res.render("../views/edit_profile", {
                user: user[0]
            });
        });
});

module.exports = router;
