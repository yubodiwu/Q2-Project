'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('companies', function(table) {
            table.increments('id').primary();
            table.string('name').notNullable().defaultTo('');
            table.string('email').notNullable().defaultTo('');
            table.string('industry').notNullable().defaultTo('');
            table.string('website').notNullable().defaultTo('');
            table.string('status').notNullable().defaultTo('');
            table.string('logo_url').notNullable().defaultTo('');
            table.string('locations').notNullable().defaultTo('');
            table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        }),
        knex.schema.createTable('users', function(table) {
            table.increments('id').primary();
            table.string('linkedin_id').notNullable().defaultTo('');
            table.string('firstName').notNullable().defaultTo('');
            table.string('lastName').notNullable().defaultTo('');
            // table.string('maiden_name').notNullable().defaultTo('');
            table.string('headline').notNullable().defaultTo('');
            table.string('location').notNullable().defaultTo('');
            table.string('industry').notNullable().defaultTo('');
            // table.string('currentShare').notNullable().defaultTo('');
            // table.string('summary').notNullable().defaultTo('');
            // table.string('specialties').notNullable().defaultTo('');
            table.string('positions').notNullable().defaultTo('');
            table.string('pictureUrl').notNullable().defaultTo('');
            // table.string('profileUrl').notNullable().defaultTo('');
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('users'),
        knex.schema.dropTable('companies')
    ]);
};
