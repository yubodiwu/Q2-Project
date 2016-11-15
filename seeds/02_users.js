'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('table_name').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('table_name').insert({
                    id: 1,
                    colName: 'rowValue1'
                }),
                knex('table_name').insert({
                    id: 2,
                    colName: 'rowValue2'
                }),
                knex('table_name').insert({
                    id: 3,
                    colName: 'rowValue3'
                })
            ]);
        });
    return knex('users').del()
        .then(function() {
            return knex('users').insert([
                {
                    // add something
                }
            ]);
};
