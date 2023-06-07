const jwt = require("jsonwebtoken");
require("dotenv").config();

const {SECRET_KEY} = process.env;

const payload = {
    id: "6480c016cd3529c5696c1c66"
};

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"});
// console.log(token);
const decodeToken = jwt.decode(token);
// console.log(decodeToken)

try {
    const {id} = jwt.verify(token, SECRET_KEY);
    // console.log(id);
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODBjMDE2Y2QzNTI5YzU2OTZjMWM2NiIsImlhdCI6MTY4NjE2MDUzMywiZXhwIjoxNjg2MjQzMzMzfQ.FU3rsWFv8Z8O5r3EWOHQyjYFpWKNxC32Ay3dqvbajzG";
    jwt.verify(invalidToken, SECRET_KEY);
}
catch(error) {
    console.log(error.message);
}