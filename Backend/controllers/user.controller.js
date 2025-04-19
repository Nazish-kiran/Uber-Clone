import userModel from "../models/user.model.js";
import { cookie, validationResult } from "express-validator";

export const registerUser = async (req, res) => {
  const { firstname, lastname, email, password, socketId } = req.body;
  if ((!firstname || !lastname || !email || !password, socketId)) {
    console.log("All fields are required");
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const hashedPassword = await userModel.hashPassword(password);
  const user = await userModel.create({
    firstname,
    lastname,
    email,
    password: hashedPassword,
    socketId,
  });

  const token = user.generateAuthToken();
  res.cookie("token", token);

  res.status(201).json({ token, user });
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
      res.status(401).json({ message: "incorrect email or password" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      res.status(401).json({ message: "incorrect email or password" });
    }
    const token = user.generateAuthToken();
    res.cookie("token", token);

    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const geUserProfile = async (req, res) => {
  res.send(req.user);
};

export const logoutUser = async (req, res) => {
  res.clearCookie("token")
  res.status(200).json({ message: "Logout successfully" });
};
