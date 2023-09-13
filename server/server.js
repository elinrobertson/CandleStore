require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const userRouter = require("./routes/user.router");
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

// Denna bör flyttar över till checkouten sen

//Här får vi tänka på hur vi ska organisera projektet. Kanske en model och en router
// Men inte skriva allt i server.js. Vi kommer behöva ha checkout, produkter, kunder
// app.post("/create-checkout-session", async (req, res) => {
//     try {
//         const session = await stripe.checkout.sessions.create({
//             line_items: req.body.map(item => {
//                 return {
//                     price: item.product,
//                     quantity: item.quantity,
//                 }
//             }),
//             mode: "payment",
//             success_url: `${CLIENT_URL}/confirmation`,
//             cancel_url: CLIENT_URL,
//         });

//         res.status(200).json({ url: session.url })
        
//     } catch (error) {
//         console.log(error.message);
//         res.status(400).json("Det gick inte så bra")
//     }
// })



app.listen(3000, ()  => console.log("Server is up and running"));


