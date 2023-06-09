const express = require("express");

const authController = require("../../controllers/auth-controller");

const schemas = require("../../schemas/users");

const {validateBody} = require("../../decorators");

const {authenticate} = require("../../middlewares");

const router = express.Router();

router.post("/signup", validateBody(schemas.userRegisterSchema), authController.signup);

router.post("/signin", validateBody(schemas.userLoginSchema), authController.signin)

router.get("/current", authenticate, authController.getCurrent);

router.post("/logout", authenticate, authController.logout);

module.exports = router;