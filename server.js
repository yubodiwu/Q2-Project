"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.listen(PORT, function(){
  console.log(`You are using port ${PORT}`);
});
