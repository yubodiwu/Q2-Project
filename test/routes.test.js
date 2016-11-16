'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

var expect = require('chai').expect;
var app = require('../server');
var request = require('supertest')(app);
var knex = require('../db/knex')

describe('Users API', function() {
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

    beforeEach(function(done) {
        knex.seed.run()
            .then(function() {
                done();
            })
            .catch(function(err) {
                done(err);
            })
    })

    it('GET / show users', function(done) {
        request.get('/users')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                expect(res.body).to.include({
                    "id": 1,
                    "linkedin_id": "fuutrzW8XY",
                    "firstName": "Trevor",
                    "lastName": "Pellegrini",
                    "headline": "Galvanize Full Stack Student",
                    "location": "{\"country\":{\"code\":\"us\"},\"name\":\"San Francisco Bay Area\"}",
                    "industry": "Computer Software",
                    "positions": "{\"_total\":0}",
                    "pictureUrl": "https://media.licdn.com/mpr/mprx/0_m8msvsotWQ6Ev7WxhFHdv4d2WhieBo4xhXsLv4dunLcMemf0GQYnRZgCbm_nqDJP7_uksxcjTWBi"
                });
                done();
            });
    });
    it('GET /:id show user', function(done) {
        request.get('/users/3')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                expect(res.body).to.include({
                    "id": 3,
                    "linkedin_id": "fuutrzW8XY",
                    "firstName": "Trevor",
                    "lastName": "Pellegrini",
                    "headline": "Galvanize Full Stack Student",
                    "location": "{\"country\":{\"code\":\"us\"},\"name\":\"San Francisco Bay Area\"}",
                    "industry": "Computer Software",
                    "positions": "{\"_total\":0}",
                    "pictureUrl": "https://media.licdn.com/mpr/mprx/0_m8msvsotWQ6Ev7WxhFHdv4d2WhieBo4xhXsLv4dunLcMemf0GQYnRZgCbm_nqDJP7_uksxcjTWBi"
                });
                done();
            });
    });
    it('POST / should create user', function(done) {
        request.post('/api/v1/movies')
            // .expect(200)
            .send({
                "id": 6,
                "linkedin_id": "fuutrzW8XY",
                "firstName": "Zach",
                "lastName": "Pellegrini",
                "headline": "Galvanize Full Stack Student",
                "location": "{\"country\":{\"code\":\"us\"},\"name\":\"San Francisco Bay Area\"}",
                "industry": "Computer Software",
                "positions": "{\"_total\":0}",
                "pictureUrl": "https://media.licdn.com/mpr/mprx/0_m8msvsotWQ6Ev7WxhFHdv4d2WhieBo4xhXsLv4dunLcMemf0GQYnRZgCbm_nqDJP7_uksxcjTWBi"
            }).end(function(err, res) {
                if (err) return done(err);
                expect(res.body.id).to.be.equal(3);
                expect(res.body.firstName).to.be.equal('Zach');
                expect(res.body.headline).to.be.equal('Galvanize Full Stack Student');
                expect(res.body.industry).to.be.equal('Computer Software');
                done();
            });
        knex('users')
            .select('*')
            .where('id', 3)
            .returning('*')
            .then(function(user) {
                console.log(user);
                expect(user[0].firstName).to.be.equal('Zach');
                done();
            })
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
