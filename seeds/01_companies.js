'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('companies').del()
        .then(function() {
            return knex('companies').insert([
                {
                    name: 'Google',
                    email: 'google@gmail.com',
                    industry: 'tech',
                    website: 'www.google.com',
                    status: 'awesome',
                    logo_url: 'G',
                    locations: 'everywhere'
                }
            ])
        });
};
