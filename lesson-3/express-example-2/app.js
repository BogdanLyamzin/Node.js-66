const express = require("express");

const movies = require("./movies");

const app = express();

app.get("/movies", (req, res)=> {
    const databaseResponse = null;
    res.json(databaseResponse);
    // res.send(databaseResponse);
    // res.json(movies);
    // res.send(movies);
})

app.listen(3000);