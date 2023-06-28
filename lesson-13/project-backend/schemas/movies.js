const Joi = require("joi");

const {genreList, releaseDateRegexp} = require("../constants/movies");

// const phoneRegexp = /^(\d{3}) \d{3}-\d{2}-\d{2}$/;

const movieAddSchema = Joi.object({
    title: Joi.string().required(),
    // phone: Joi.string().pattern(phoneRegexp).required(),
    director: Joi.string().required().messages({
        'any.required': `"director" is a required field`,
        'string.empty': `"director" cannot be an empty field`,
    }),
    favorite: Joi.boolean(),
    genre: Joi.string().valid(...genreList).required(),
    releaseDate: Joi.string().pattern(releaseDateRegexp).required(),
})

const movieUpdateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
})

module.exports = {
    movieAddSchema,
    movieUpdateFavoriteSchema,
}