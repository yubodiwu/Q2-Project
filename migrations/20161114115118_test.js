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
            table.string('first_name').notNullable().defaultTo('');
            table.string('last_name').notNullable().defaultTo('');
            // table.string('maiden_name').notNullable().defaultTo('');
            table.string('headline').notNullable().defaultTo('');
            table.string('location').notNullable().defaultTo('');
            table.string('industry').notNullable().defaultTo('');
            // table.string('currentShare').notNullable().defaultTo('');
            // table.string('summary').notNullable().defaultTo('');
            // table.string('specialties').notNullable().defaultTo('');
            table.string('positions').notNullable().defaultTo('');
            table.string('pic_url').notNullable().defaultTo('');
            table.string('email').notNullable().defaultTo('');
            table.json('skills');
            table.specificType('hashed_password', 'char(60)').notNullable();
            // table.string('profileUrl').notNullable().defaultTo('');
        }),
        knex.schema.createTable('connections', function(table) {
            table.integer('user_id').notNullable().references('id').inTable('users').onDelete('cascade');
            table.integer('connection_id').notNullable().references('id').inTable('users').onDelete('cascade');
            table.unique(['user_id','connection_id']);
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('connections'),
        knex.schema.dropTable('users'),
        knex.schema.dropTable('companies')
    ]);
};
