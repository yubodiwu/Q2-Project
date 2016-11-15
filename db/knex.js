'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile')[environment];
module.exports = require('knex')(config);
