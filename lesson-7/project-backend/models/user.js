const {Schema, model} = require("mongoose");

const {handleMongooseError} = require("../middlewares");

const {emailRegexp} = require("../constants/users");

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        match: emailRegexp,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    }
}, {versionKey: false, timestamps: true});

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = User;