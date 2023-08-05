import express from "express";
import products from "./data/products.js";

//call dotenv.config() before using any environment variable
import dotenv from "dotenv";
dotenv.config();

// to specify the port on which the server will run.
const port = process.env.PORT || 5000;

//to define our API routes and configure the server.
const app = express();

app.get("/api/products", (req, res) => {
  //   res.send("API is running.");
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`server running on port ${port}`));
