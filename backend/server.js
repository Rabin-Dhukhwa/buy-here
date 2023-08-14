import express from "express";
//call dotenv.config() before using any environment variable
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";
connectDB(); //connect to mongoDB

import productRoutes from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

// to specify the port on which the server will run.
const port = process.env.PORT || 5000;

//to define our API routes and configure the server.
const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

//when call/hit '/api/products' , it will redirect to productRoutes file
app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server running on port ${port}`));
