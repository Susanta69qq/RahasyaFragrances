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

productRouter.get("/collections/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const product = await Product.findOne({ name });
    res.status(200).json({ message: "Product fetched successfully", product });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching the product you are looking for: ",
      error,
    });
  }
});

export default productRouter;
