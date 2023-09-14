const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


// async function getAllProducts(req, res) {
//     const products = await stripe.products.list({
//         limit: 3,
//     });
//     console.log(products);
//     return res.status(200, products)
// }

// async function getAllProducts(req, res) {
//     try {
//         const products = await stripe.products.list({
//             limit: 3,
//         });
//         console.log(products);
//         return res.status(200).json(products); // Använd json() för att skicka JSON-data
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ error: "Server error" }); // Lägg till felhantering
//     }
// }
// console.log("Innan Stripe-anrop");
// async function getAllProducts(req, res) {
    
//     try {

//         const products = await stripe.products.list({
//             limit: 3,
//         });
//         console.log("Efter Stripe-anrop");
//         console.log("Products fetched successfully:", products);
//         return res.status(200).json(products);
//     } catch (error) {
//         console.error("Error fetching products:", error.message); 
//         return res.status(500).json({ error: "Server error" });
//     }
// }

console.log("Innan Stripe-anrop");
async function getAllProducts(req, res) {
    try{
        const products = await stripe.products.list({
            limit: 3,
        });
        console.log("Efter Stripe-anrop");
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = { getAllProducts }