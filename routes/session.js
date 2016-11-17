'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

const boom = require('boom');
const bcrypt = require('bcrypt-as-promised');
const express = require('express');
const knex = require('../db/knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

var router = express.Router();

router.post(`/session`, function(req, res, next) {
    const { email, password } = req.body;
    console.log(`email is `, email);
    console.log(`password is `, password);
    let user;

    if (!email || !email.trim()) {
        return next(boom.create(400, 'Email must not be blank'));
    }

    if (!password || password.length < 8) {
        return next(boom.create(400, 'Password must not be blank'))
    }

    knex('users')
        .where('email', email)
        .first()
        .then((row) => {
            if (!row) {
                throw boom.create(400, 'Bad email or password');
            }

            user = camelizeKeys(row);

            return bcrypt.compare(password, user.hashedPassword);
        })
        .then(() => {
            delete user.hashedPassword;

            req.session.userId = user.id;
            console.log(`req session id `, req.session.userId);
            console.log(req.session);

            res.redirect('/search/contact');
        })
        .catch(bcrypt.MISMATCH_ERROR, () => {
            throw boom.create(400, 'Bad email or password');
        })
        .catch((err) => {
            next(err)
        })
});

module.exports = router;
