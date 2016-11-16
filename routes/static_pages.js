"use strict"
const express = require("express");
const router = express.Router();

router.get("/create_user", function(req, res) {
    // res.send("working");
    res.render("../views/create_user_form");
});

module.exports = router;
