import express from "express";
import Product from "../models/product.model.js";

const router = express.Router();

router.get("/collections", async (req, res) => {
  try {
    const products = await Product.find();
    res
      .status(200)
      .json({ message: "Products fetched successfully", products });
  } catch (error) {
    res.status(500).json({ message: "No products available: ", error });
  }
});

export default router;
