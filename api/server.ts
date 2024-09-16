import express from "express";
import cors from "cors";
import "dotenv/config";
import { ProductListSchema, PriceSchema } from "@shared/products/schemas";

const stripe = require("stripe")(process.env.SECRET_KEY);
const app = express();
const PORT = 8080;

const YOUR_DOMAIN = "http://localhost:3000";

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

app.get("/api/products", async (req, res) => {
  try {
    const products = await stripe.products.list({ active: true });
    const validatedData = ProductListSchema.safeParse(products);

    if (!validatedData.success) {
      // return error that can't retrieve product list
      return res.status(400).json({ errors: "list not retrievable" });
    }

    const data = validatedData.data.data;

    let filteredData = [];

    for (var item of data) {
      const price = await stripe.prices.retrieve(item.default_price);
      const priceChecked = PriceSchema.safeParse(price);

      if (!priceChecked.success) {
        // return error can't retrieve price object
        return res.status(400).json({ errors: "price not retrievable" });
      }

      filteredData.push({
        price: priceChecked.data.unit_amount,
        productName: item.name,
        images: item.images
      });
    }

    res.json(filteredData);
  } catch (err) {
    res.status(400).json({ errors: err });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
