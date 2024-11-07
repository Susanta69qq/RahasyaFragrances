import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "unisex"],
  },
  price: {
    type: Number,
    required: true,
  },
  bottleSize: {
    type: String,
  },
  description: {
    type: String,
  },
  inspiration: {
    type: String,
  },
  scentNotes: {
    type: String,
  },
  howToWear: {
    type: String,
  },
  ingredients: {
    type: String,
  },
  sustainability: {
    type: String,
  },
  images: {
    type: [String],
    required: true,
  },
  blendInfo: {
    type: [String],
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
