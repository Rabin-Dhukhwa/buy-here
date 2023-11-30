import express from "express";
const router = express.Router();

import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
} from "../controllers/productController.js";

import { protect, admin } from "../middleware/authMiddleware.js";

//when not using controllers
// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({});
//     res.json(products);
//   })
// );

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/:id").get(getProductById).put(protect, admin, updateProduct);

export default router;
