import express from "express";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  await user.save();
  res.json({ message: "User registered successfully" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }
  user.comparePassword(password, (err, isMatch) => {
    if (isMatch) {
      const token = jwt.sign({ id: user._id }, "secret_key", {
        expiresIn: "1h",
      });
      res.json({ message: "Login successful", token });
    } else {
      res.status(400).json({ message: "Invalid email or password" });
    }
  });
});

export default router;
