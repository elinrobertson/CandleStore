require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const userRouter = require("./routes/user.router");
const productRouter = require("./routes/products.router")
const checkoutRouter = require("./routes/checkout.router")
const cookieSession = require("cookie-session")

const app = express();


// const CLIENT_URL = "http://localhost:5173";

// Middlewares
app.use(
    cors({
        origin: "*",
    })
);
app.use(express.json())

app.use(
    cookieSession({
        secret: "S3cR3TK3Y",
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: "strict",
        httpOnly: true,
        secure: false
    })
);


//Routers ska in här

app.use("/api/users", userRouter)
app.use("/api/products", productRouter)
app.use("/api/checkout", checkoutRouter)





app.listen(3000, ()  => console.log("Server is up and running"));


