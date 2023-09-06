const express = require("express")
const userRouter = express.Router()
const { register } = require("../controllers/user.controller")

userRouter.get("/register", register)



module.exports = userRouter