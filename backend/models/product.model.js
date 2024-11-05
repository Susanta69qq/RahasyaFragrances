import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "unisex"],
  },
  price: {
    type: Number,
    required: true,
  },
  inspiration: {
    type: String,
    required: true,
  },
  scentNotes: {
    type: String,
    required: true,
  },
  howToWear: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  sustainability: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  blendInfo: {
    type: [String],
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
