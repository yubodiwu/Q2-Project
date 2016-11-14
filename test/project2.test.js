'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

var expect = require('chai').expect;
var app = require('../app');
var request = require('supertest')(app);
var knex = require('../db/knex')

describe('Users API', function() {
    it('GET / show things', function(done) {
        request.get('/api/v1/users')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });
    it('POST / should create user', function(done) {
        request.post('/api/v1/movies')
            .expect(200)
            .send({
                // something
            }).end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });
    it('PUT / should update a user', function(done) {
        request.put('/api/v1/movies/54')
            .send({
                // something
            }).expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            })
    });
    it('DELETE / should delete a user', function(done) {
        request.delete('/api/v1/movies/54')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                expect(res.body.statusCode).to.be.equal(204);
                done();
            });
    });
});
