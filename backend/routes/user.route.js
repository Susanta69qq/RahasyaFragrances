import express from "express";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userRouter = express.Router();

//register new user
userRouter.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    });

    return res
      .status(200)
      .json({ message: "User created successfully", newUser });
  } catch (error) {
    return res.status(400).json({ message: "User signup failed", error });
  }
});

//login user
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({
        message: "email or password is not valid for any of our users",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "email or password is not valid for any of our users",
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    res.cookie("authToken", token);

    return res
      .status(200)
      .json({ message: "User has successfully logged in!", token: token });
  } catch (error) {
    return res.status(400).json({ message: "Login failed", error });
  }
});

//logout user

export default userRouter;
