const express = require("express");

const movies = require("../../data/movies");

const router = express.Router();

router.get("/", (req, res)=> {
    res.json(movies);
});

router.get("/:id", (req, res)=> {
    res.json(movies[0])
})

module.exports = router;