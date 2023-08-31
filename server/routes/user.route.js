const express = require("express");
const { signUpValidator } = require("../middleware/signup.validator");
const { loginValidator } = require("../middleware/login.validator");
const { authenticateUser } = require("../middleware/authenticateUser");
const { userSignUp, userLogin, getUserDetails } = require("../controller/user.controller");

const userRoute = express.Router();

userRoute.post("/signup", signUpValidator, userSignUp);

userRoute.post("/login", loginValidator, userLogin);

userRoute.get("/", authenticateUser, getUserDetails);

module.exports = {
    userRoute
}