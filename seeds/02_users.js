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
                "first_name": "Trevor",
                "headline": "Galvanize Full Stack Student",
                "linkedin_id": "fuutrzW8XY",
                "industry": "Computer Software",
                "last_name": "Pellegrini",
                "location": {
                    "country": {
                        "code": "us"
                    },
                    "name": "San Francisco Bay Area"
                },
                "pic_url": "https://media.licdn.com/mpr/mprx/0_m8msvsotWQ6Ev7WxhFHdv4d2WhieBo4xhXsLv4dunLcMemf0GQYnRZgCbm_nqDJP7_uksxcjTWBi",
                "email": "trevorpellegrini@gmail.com",
                "hashed_password": "thisisahashedpassword"
            }, {
                "first_name": "Yubo",
                "headline": "Galvanize Full Stack Student",
                "linkedin_id": "fuutrsW8XY",
                "industry": "Computer Software",
                "last_name": "Diwu",
                "location": {
                    "country": {
                        "code": "us"
                    },
                    "name": "San Francisco Bay Area"
                },
                "pic_url": "",
                "email": "yubo.diwu@gmail.com",
                "hashed_password": "thisisahashedpassword"
            }, {
                "first_name": "Mikey",
                "headline": "Smashed",
                "linkedin_id": "fatigue",
                "industry": "Computer Software",
                "last_name": "Liu",
                "location": {
                    "country": {
                        "code": "us"
                    },
                    "name": "San Francisco Bay Area"
                },
                "pic_url": "",
                "hashed_password": "thisisahashedpassword"
            }]);
        })
        .then(function() {
            return knex.raw(
                "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
            )
        });
};
