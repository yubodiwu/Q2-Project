'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function() {
            return knex('users').insert([{
                "firstName": "Trevor",
                "headline": "Galvanize Full Stack Student",
                "linkedin_id": "fuutrzW8XY",
                "industry": "Computer Software",
                "lastName": "Pellegrini",
                "location": {
                    "country": {
                        "code": "us"
                    },
                    "name": "San Francisco Bay Area"
                },
                "pictureUrl": "https://media.licdn.com/mpr/mprx/0_m8msvsotWQ6Ev7WxhFHdv4d2WhieBo4xhXsLv4dunLcMemf0GQYnRZgCbm_nqDJP7_uksxcjTWBi",
                "positions": {
                    "_total": 0
                }
            }, {
                "firstName": "Yubo",
                "headline": "Galvanize Full Stack Student",
                "linkedin_id": "fuutrsW8XY",
                "industry": "Computer Software",
                "lastName": "Diwu",
                "location": {
                    "country": {
                        "code": "us"
                    },
                    "name": "San Francisco Bay Area"
                },
                "pictureUrl": "https://media.licdn.com/mpr/mprx/0_m8msvsotWQ6Ev7WxhFHdv4d2WhieBo4xhXsLv4dunLcMemf0GQYnRZgCbm_nqDJP7_uksxcjTWBi",
                "positions": {
                    "_total": 1
                }
            }]);
        });
};
