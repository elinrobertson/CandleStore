const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

console.log("Innan Stripe-anrop");
async function getAllProducts(req, res) {
    try{
        const products = await stripe.products.list({
            expand: ["data.default_price"]
        });
        console.log("Efter Stripe-anrop");
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = { getAllProducts }