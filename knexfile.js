'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

require('dotenv').load();

module.exports = {

    development: {
        client: 'postgresql',
        connection: 'postgres://localhost/q2project_dev',
        pool: {
            min: 1,
            max: 1
        }
    },

    test: {
        client: 'postgresql',
        connection: 'postgres://localhost/q2project_test',
        pool: {
            min: 1,
            max: 1
        }
    },

};
