import express from "express";
import cors from "cors";
import "dotenv/config";

const stripe = require("stripe")(process.env.SECRET_KEY);
const app = express();
const PORT = 8080;

const YOUR_DOMAIN = 'http://localhost:3000';

app.use(cors());

app.get("/api/home", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "price_1PwuyLQSrD3qjg4A80NebRHy", // bike - kmart
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/checkout?success=true`,
    cancel_url: `${YOUR_DOMAIN}/checkout?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
