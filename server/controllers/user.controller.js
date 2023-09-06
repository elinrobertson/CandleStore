const fs = require("fs");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


async function register (req, res) {
    try {
        const { name, email } = req.body;

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
            name: "Elin",
            email: "elin@email.com",
            stripeCustomerId: customer.id,
        };

        existingUsers.push(newUser);

        const jsonData = JSON.stringify(existingUsers, null, 2);

        fs.writeFileSync(filePath, jsonData)


    res.status(200).json({
        message: "Användare skapad och tillagd",
        user: newUser,
    });
    } catch (error) {
        console.log("Fel vid registrering" , error);
        res.status(500).json({ error: "Ett fel uppstod vid registrering." })
    }
}

module.exports = { register }

// APIom hur man registrerar användare
