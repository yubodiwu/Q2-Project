'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('connections').del()
    .then(function () {
      return knex('connections').insert([{
          user_id: 1,
          connection_id: 2
      }, {
          user_id: 2,
          connection_id: 1
      }])
  });
};
