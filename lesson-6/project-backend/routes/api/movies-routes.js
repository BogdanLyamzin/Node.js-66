const express = require("express");

const moviesController = require("../../controllers/movies-controller");

const schemas = require("../../schemas/movies");

const {validateBody} = require("../../decorators");

const {isValidId} = require("../../middlewares")

const router = express.Router();

router.get("/", moviesController.getAllMovies);

router.get("/:id", isValidId, moviesController.getMovieById);

router.post("/", validateBody(schemas.movieAddSchema), moviesController.addMovie);

router.put("/:id", isValidId, validateBody(schemas.movieAddSchema), moviesController.updateMovieById);

router.patch("/:id/favorite", isValidId, validateBody(schemas.movieUpdateFavoriteSchema), moviesController.updateFavorite);

router.delete("/:id", isValidId, moviesController.deleteMovieById)

module.exports = router;