'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

const express = require('express');
var router = express.Router();

router.get(`/companies`, function(req, res) {
    // this should be the index request
});

router.get(`/companies/:id`, function(req, res) {
    // this should be the show request
});

module.exports = router;
