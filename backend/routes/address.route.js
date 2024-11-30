import express from "express";
import Address from "../models/address.model.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const addressRouter = express.Router();

//add new address
addressRouter.post("/add", async (req, res) => {
  const { firstName, lastName, address, city, country, postalCode, phone } =
    req.body;

  try {
    //check if authToken exists in cookies
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "You need to be logged in to add an address" });
    }

    //Decode token to get userId
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;

    //Find user associated with the token
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(401)
        .json({ message: "Not authorized to add an address" });
    }

    //Check if address already exists
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

    //Create new address and associate it with the logged-in user
    const newAddress = await Address.create({
      firstName,
      lastName,
      address,
      city,
      country,
      postalCode,
      phone,
      user: userId,
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
