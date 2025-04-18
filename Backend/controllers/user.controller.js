import userModel from "../models/user.model.js";
import { validationResult } from "express-validator";

export const registerUser = async (req, res) => {
  const { firstname, lastname, email, password, socketId} = req.body;
  if (!firstname || !lastname || !email || !password , socketId) {
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

  res.status(201).json({ token, user });
};
