import express from "express";
import Order from "../models/order.model.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import Address from "../models/address.model.js";

const orderRouter = express.Router();

orderRouter.post("/order", async (req, res) => {
  const { products, address, total, paymentMethod } = req.body;
  try {
    //check if authToken exists in cookies
    const token = req.cookies.authToken;
    if (!token) {
      return res.status(401).json({
        message: "You need to be logged in to be able to place an order",
      });
    }

    //Decode token to get userId
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;

    //Find user associated with the token
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(401)
        .json({ message: "Not authorized to place an order" });
    }

    //Find address of the user
    const userAddress = await Address.findOne({ user: userId });
    if (!userAddress) {
      return res.status(400).json({
        message:
          "Please add an address to your account before you can place an order.",
      });
    }

    const newOrder = await Order.create({
      user: userId,
      products,
      address: userAddress._id,
      total,
      paymentMethod,
    });

    return res
      .status(200)
      .json({ message: "Order placed successfully", newOrder });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Failed to place your order!", error });
  }
});

export default orderRouter;
