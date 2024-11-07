import express from "express";
import Product from "../models/product.model.js";

const productRouter = express.Router();

productRouter.get("/collections", async (req, res) => {
  try {
    const products = await Product.find();
    res
      .status(200)
      .json({ message: "Products fetched successfully", products });
  } catch (error) {
    res.status(500).json({ message: "No products available: ", error });
  }
});

export default productRouter;
