const express = require("express")
const productRouter = express.Router()
const { getAllProducts } = require("../controllers/products.controller")

// productRouter.get('/products', getAllProducts);
// console.log("GET /api/products route called"); // Lägg till en logg här
// getAllProducts(req, res);

// productRouter.get("/products", (req, res) => {
//     console.log("GET /api/products route called");
//     getAllProducts(req, res); // Skicka in req och res till getAllProducts
// });

productRouter.get("/products", getAllProducts)

module.exports = productRouter;