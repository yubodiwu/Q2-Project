/* eslint-disable camelcase */
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const {
    suite,
    test
} = require('mocha');
const knex = require('../knex');

suite('migrations', () => {
    before((done) => {
        knex.migrate.latest()
            .then(() => {
                done();
            })
            .catch((err) => {
                done(err);
            });
    });

    after((done) => {
        knex.migrate.rollback()
            .then(() => {
                done();
            })
            .catch((err) => {
                done(err);
            });
    });

    test('company columns', (done) => {
        knex('companies').columnInfo()
            .then((actual) => {
                const expected = {
                    id: {
                        type: 'integer',
                        maxLength: null,
                        nullable: false,
                        defaultValue: 'nextval(\'companies_id_seq\'::regclass)'
                    },

                    name: {
                        type: 'character varying',
                        maxLength: 255,
                        nullable: false,
                        defaultValue: '\'\'::character varying'
                    },

                    email: {
                        type: 'character varying',
                        maxLength: 255,
                        nullable: false,
                        defaultValue: '\'\'::character varying'
                    },

                    industry: {
                        type: 'character varying',
                        maxLength: 255,
                        nullable: false,
                        defaultValue: '\'\'::character varying'
                    },

                    website: {
                        type: 'text',
                        maxLength: null,
                        nullable: false,
                        defaultValue: '\'\'::text'
                    },

                    status: {
                        type: 'text',
                        maxLength: null,
                        nullable: false,
                        defaultValue: '\'\'::text'
                    },

                    logo_url: {
                        type: 'timestamp with time zone',
                        maxLength: null,
                        nullable: false,
                        defaultValue: 'now()'
                    },

                    locations: {
                        type: 'Array',
                        maxLength: null,
                        nullable: false,
                        defaultValue: '[]'
                    },

                    updated_at: {
                        type: 'timestamp with time zone',
                        maxLength: null,
                        nullable: false,
                        defaultValue: 'now()'
                    }
                };

                for (const column in expected) {
                    assert.deepEqual(
                        actual[column],
                        expected[column],
                        `Column ${column} is not the same`
                    );
                }

                done();
            })
            .catch((err) => {
                done(err);
            });
    });
});
