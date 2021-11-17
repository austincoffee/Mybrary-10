const express = require(`express`);
const author = require("../models/author");
const router = express.Router();
const Author = require(`../models/author`);


// All authors Route
router.get(`/`, (req, res) => {
    res.render(`authors`);
})

// New Author Route
router.get(`/new`, (req, res) => {
    res.render(`authors/new`, { author: new Author() });
})

// Create Author Route
router.post(`/`, (req, res) => {
    res.send(req.body.name);
})

module.exports = router;