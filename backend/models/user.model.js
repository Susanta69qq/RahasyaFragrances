import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 20,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
