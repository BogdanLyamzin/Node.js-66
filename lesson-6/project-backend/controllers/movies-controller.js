const Movie = require("../models/movie");

const { HttpError } = require("../helpers");

const { ctrlWrapper } = require("../decorators");

const getAllMovies = async (req, res) => {
    const result = await Movie.find({}, "-createdAt -updatedAt");
    res.json(result);
}

const getMovieById = async (req, res) => {
    const { id } = req.params;
    // const result = await Movie.findOne({_id: id});
    const result = await Movie.findById(id);
    if (!result) {
        throw HttpError(404, `Movie with ${id} not found`);
    }
    res.json(result);
}

const addMovie = async (req, res) => {
    const result = await Movie.create(req.body);
    res.status(201).json(result);
}

const updateMovieById = async (req, res) => {
    const { id } = req.params;
    const result = await Movie.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
        throw HttpError(404, `Movie with ${id} not found`);
    }
    res.json(result);
}

const updateFavorite = async (req, res) => {
    const { id } = req.params;
    const result = await Movie.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
        throw HttpError(404, `Movie with ${id} not found`);
    }
    res.json(result);
}

const deleteMovieById = async (req, res) => {
    const { id } = req.params;
    const result = await Movie.findByIdAndDelete(id);
    if (!result) {
        throw HttpError(404, `Movie with ${id} not found`);
    }

    res.json({
        message: "Delete success"
    })
}

module.exports = {
    getAllMovies: ctrlWrapper(getAllMovies),
    getMovieById: ctrlWrapper(getMovieById),
    addMovie: ctrlWrapper(addMovie),
    updateMovieById: ctrlWrapper(updateMovieById),
    updateFavorite: ctrlWrapper(updateFavorite),
    deleteMovieById: ctrlWrapper(deleteMovieById),
}