'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true
var num = 0;
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const knex = require('./node_modules/knex');
const request = require('request');
const PORT = 3000;
const app = express();

const oauth = require('./routes/oauth');
const users = require('./routes/users');
const companies = require('./routes/companies');
const userForms = require('./routes/static_pages');
const connections = require('./routes/connections');
const session = require('./routes/session');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.set('trust proxy', 1)
app.use(cookieSession({
    name: 'session',
    keys: [process.env.SESSION_SECRET, 1, 2, 3],
    secret: process.env.SESSION_SECRET
}));
app.use(`/`, function(req, res, next) {
    console.log(`seeing session ${num}`);
    console.log(req.session);
    num++;
    next();
})

app.use('/oauth', oauth);
app.use('/users', users);
app.use('/companies', companies);
app.use('/form', userForms);
app.use('/connections', connections);
app.use(session);

app.get("/", function(req, res) {
    res.render('../views/index');
});

app.listen(PORT, function() {
    console.log(`You are using port ${PORT}`);
});

module.exports = app;
