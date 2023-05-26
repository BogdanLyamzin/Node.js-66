const express = require("express");
const cors = require("cors");

const moviesRouter = require("./routes/api/movies-routes");

const app = express();

app.use(cors());

app.use("/api/movies", moviesRouter);

app.listen(3000);

