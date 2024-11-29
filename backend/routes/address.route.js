import express from "express";
import Address from "../models/address.model.js";

const addressRouter = express.Router();

addressRouter.post("/", async (req, res) => {
  const { firstName, lastName, address, city, country, postalCode, phone } =
    req.body;
  try {
    const existingAddress = await Address.findOne({
      firstName,
      lastName,
      address,
      city,
      country,
      postalCode,
      phone,
    });

    if (existingAddress) {
      return res.status(400).json({ message: "Address already exists!" });
    }

    const newAddress = await Address.create({
      firstName,
      lastName,
      address,
      city,
      country,
      postalCode,
      phone,
    });

    return res
      .status(200)
      .json({ message: "Address added successfully", newAddress });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Failed to add address", error: error.message });
  }
});

export default addressRouter;
