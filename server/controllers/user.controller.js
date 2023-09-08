const fs = require("fs");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


async function register(req, res) {
    try {
        const { name, email, password } = req.body;

        // Kolla om användaren redan finns i Stripe (baserat på e-postadress eller annan unik identifierare)
        const existingCustomer = await stripe.customers.list({ email: email });
        if (existingCustomer.data.length > 0) {
            return res.status(409).json("User already exists.");
        }

        // Skapa en ny Stripe-kund med användarens e-postadress som identifierare
        const customer = await stripe.customers.create({
            name: name,
            email: email,
        });

        const filePath = "./db/customers.json";

        let existingUsers = [];

        if(fs.existsSync(filePath)) {
            const fileData = fs.readFileSync(filePath, "utf8");
            existingUsers = JSON.parse(fileData);
        }

        if (!Array.isArray(existingUsers)) {
            existingUsers = [];
          }

            const newUser = {
            name: name,
            email: email,
            stripeCustomerId: customer.id
        };

        existingUsers.push(newUser);

        const jsonData = JSON.stringify(existingUsers, null, 2);

        fs.writeFileSync(filePath, jsonData)


        // Nu har du skapat en ny användare i Stripe
        // Du kan lägga till mer logik här om du behöver, som att hantera lösenord eller andra användaruppgifter

        res.status(201).json(customer);
    } catch (error) {
        console.error("Fel vid registrering:", error);
        res.status(400).json(error.message);
    }
}

// async function register (req, res) {
//     try {
//         const { name, email } = req.body;

//         const customer = await stripe.customers.create({
//             name: name,
//             email: email,
//         });
        
//         const filePath = "./db/customers.json";

//         let existingUsers = [];

//         if(fs.existsSync(filePath)) {
//             const fileData = fs.readFileSync(filePath, "utf8");
//             existingUsers = JSON.parse(fileData);
//         }

//         if (!Array.isArray(existingUsers)) {
//             existingUsers = [];
//           }

//         const newUser = {
//             name: "Amanda",
//             email: "amanda@email.com",
//             stripeCustomerId: customer.id,
//         };

//         existingUsers.push(newUser);

//         const jsonData = JSON.stringify(existingUsers, null, 2);

//         fs.writeFileSync(filePath, jsonData)


//     res.status(200).json({
//         message: "Användare skapad och tillagd",
//         user: newUser,
//     });
//     } catch (error) {
//         console.log("Fel vid registrering" , error);
//         res.status(500).json({ error: "Ett fel uppstod vid registrering." })
//     }
// }






module.exports = { register }

// APIom hur man registrerar användare
