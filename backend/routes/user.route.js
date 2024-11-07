import express from "express";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";

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

export default userRouter;
