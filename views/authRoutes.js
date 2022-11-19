const express = require("express");
const authRouter = express.Router();

const {
    authLoginController,
    authRegisterController,
} = require("../controllers/AuthController");

authRouter.post("/login", authLoginController);
authRouter.post("/register", authRegisterController);

module.exports = authRouter;