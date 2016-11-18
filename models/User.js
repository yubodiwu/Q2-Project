'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

const knex = require('../db/knex');
const bcrypt = require('bcrypt-as-promised');

class User {
    constructor(request) {
        console.log("request", request)
        this.request = this.request;
        this.id = request.id;
        this.linkedinId = request.linkedinId;
        this.firstName = request.firstName;
        this.lastName = request.lastName;
        this.headline = request.headline;
        this.location = "San Francisco Bay Area";
        this.industry = request.industry;
        this.summary = request.summary;
        this.specialties = request.specialties;
        this.profilePictureUrl = request.pictureUrl;
        this.email = request.emailAddress;
        this.password = request.password;
    }

    toObject() {
        return {
            id: this.id,
            linkedin_id: this.linkedinId,
            first_name: this.firstName,
            last_name: this.lastName,
            headline: this.headline,
            location: this.location,
            industry: this.industry,
            positions: this.request,
            pic_url: this.profilePictureUrl,
            email: this.email,
            password: this.password
        };
    }

    postToDBoAuth(res) {
        var password = this.password;
        var postObject = this.toObject();
        var userExists = 2;
        delete postObject.password;

        bcrypt.hash(password, 12)
            .then(function(hashedPassword) {
                return hashedPassword;
            }).then(function(hashedPassword) {
                postObject.hashed_password = hashedPassword;

                knex('users')
                    .where('email', postObject.email)
                    .returning('*')
                    .then(function(user) {
                        res.cookie('token', user[0], {path: '/', httpOnly: true});
                        if (user.length > 0) {
                            res.redirect(`/users/search/contact`);
                        } else {
                            console.log(postObject);
                            knex('users')
                                .insert(postObject)
                                .returning('*')
                                .then(function(user) {
                                    res.redirect('/users/registered')
                                })
                                .catch(function(err ) {
                                    console.log('post error: ' + err);
                                });
                        }
                    })
            })
    }

    postToDB(res) {
        var password = this.password;
        var postObject = this.toObject();
        var userExists = 2;
        delete postObject.password;

        bcrypt.hash(password, 12)
            .then(function(hashedPassword) {
                return hashedPassword;
            }).then(function(hashedPassword) {
                postObject.hashed_password = hashedPassword;

                knex('users')
                    .where('email', postObject.email)
                    .returning('*')
                    .then(function(user) {
                        if (user.length > 0) {
                            res.redirect(`/users/already_exists`);
                        } else {
                            res.cookie('token', user[0], {path: '/', httpOnly: true});
                            knex('users')
                                .insert(postObject)
                                .returning('*')
                                .then(function(user) {
                                    res.redirect('/users/registered')
                                })
                                .catch(function(err ) {
                                    console.log('post error: ' + err);
                                });
                        }
                    })
            })
    }
}

module.exports = User;
