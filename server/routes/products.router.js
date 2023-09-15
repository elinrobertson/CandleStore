const express = require("express")
const productRouter = express.Router()
const { getAllProducts } = require("../controllers/products.controller")

productRouter.get("/", getAllProducts)

module.exports = productRouter;