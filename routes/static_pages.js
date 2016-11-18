'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

const express = require("express");
const router = express.Router();

router.get("/form/create_user", function(req, res) {
    // res.send("working");
    res.render("../views/create_user_form");
});

router.get(`/show_connections/:id`, function(req, res) {
    res.render(`../views/display_connections`, { userid: req.cookies.token.id });
});

module.exports = router;
