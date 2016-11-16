'use strict';
// jshint esversion: 6
// jshint devel: true
// jshint node: true
// jshint browser: true
// jshint mocha: true

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const knex = require('./node_modules/knex');
const request = require('request');
const PORT = 3000;
const app = express();

const oauth = require('./routes/oauth');
const users = require('./routes/users');
const companies = require('./routes/companies');
const userForms = require('./routes/static_pages');
const connections = require('./routes/connections');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/oauth', oauth);
app.use('/users', users);
app.use('/companies', companies);
app.use('/form', userForms);
app.use('/connections', connections);

app.get("/", function(req, res) {
    res.render('../views/index');
});

app.listen(PORT, function() {
    console.log(`You are using port ${PORT}`);
});

module.exports = app;
