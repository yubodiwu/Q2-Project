'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

module.exports = {

    development: {
        client: 'postgresql',
        connection: 'postgres://localhost/q2project_dev',
        pool: {
            min: 1,
            max: 1
        }
    },

    // developmentCompanies: {
    //     client: 'postgresql',
    //     connection: 'postgres://localhost/companies_dev',
    //     pool: {
    //         min: 1,
    //         max: 1
    //     }
    // },

    test: {
        client: 'postgresql',
        connection: 'postgres://localhost/q2project_test',
        pool: {
            min: 1,
            max: 1
        }
    },

    // testCompanies: {
    //     client: 'postgresql',
    //     connection: 'postgres://localhost/companies_test',
    //     pool: {
    //         min: 1,
    //         max: 1
    //     }
    // },

};
