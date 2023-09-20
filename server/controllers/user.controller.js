const fs = require("fs");
const bcrypt = require("bcrypt");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const filePath = "./db/customers.json";



async function register(req, res) {
    try {
        const { name, email } = req.body;
        const hashedPassword = await bcrypt.hash(req.body.password, 10); // Kryptera lösenordet med bcrypt

        // Kolla om användaren redan finns i Stripe (baserat på e-postadress eller annan unik identifierare)
        const existingCustomer = await stripe.customers.list({ email: email });
        if (existingCustomer.data.length > 0) {
            return res.status(409).json("User already exists.");
        }

        // Skapa en ny Stripe-kund med användarens e-postadress som identifierare
        const customer = await stripe.customers.create({
            name: name,
            email: email,
            // password: hashedPassword
        });

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
            password: hashedPassword,
            stripeCustomerId: customer.id,
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

async function login(req, res) {
    // Check if username and password is correct
    const dbUsers = fs.readFileSync(filePath)

    const customers = JSON.parse(dbUsers)

    const existingUser = customers.find(customer => customer.email === req.body.email)
  
    if (
      !existingUser ||
      !(await bcrypt.compare(req.body.password, existingUser.password))
    ) {
      return res.status(401).json("Wrong password or username");
    }
  
    // Check if user already is logged in
    if (req.session.id) {
      return res.status(200).json(existingUser);
    }
  
    // Save info about the user to the session (an encrypted cookie stored on the client)
    req.session = existingUser;
    res.status(200).json(existingUser);
  }



module.exports = { register, login }