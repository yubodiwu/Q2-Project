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
                "pic_url": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/8/005/090/289/3ca32fd.jpg",
                "email": "trevorpellegrini@gmail.com",
                "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u",
                "skills": {
                  "skills":["javascript","Software Dev","Node.js","Golf", "Marketo","salesforce.com","awesomeness"]
                }
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
                "pic_url": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/5/005/095/0a8/299b207.jpg",
                "email": "allndiwu@gmail.com",
                "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u",
                "skills": {
                  "skills":["javascript","Software Dev","Node.js","Recursion", "Civil Engineering","awesomeness"]
                }
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
                "pic_url": "https://scontent-lga3-1.xx.fbcdn.net/t31.0-8/1548159_10153744860430623_1596799000_o.jpg",
                "hashed_password": "$2a$12$NBfl8kdg099B5o67963vyuIerPIMivznOz/TapPNDEfqHe.EVo05u",
                "skills": {
                  "skills":["Fatigue","javascript","Software Dev","Node.js","awesomeness"]
                }
            }]);
        })
        .then(function() {
            return knex.raw(
                "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
            )
        });
};
