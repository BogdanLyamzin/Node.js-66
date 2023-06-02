const {Schema, model} = require("mongoose");

const {handleMongooseError} = require("../middlewares");

const {genreList, releaseDateRegexp} = require("../constants/movies");

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    genre: {
        type: String,
        enum: genreList,
        required: true,
    },
    releaseDate: {
        type: String,
        match: releaseDateRegexp,
        required: true,
    }
}, {versionKey: false, timestamps: true});

movieSchema.post("save", handleMongooseError);

const Movie = model("movie", movieSchema);

module.exports = Movie;