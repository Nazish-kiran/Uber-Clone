import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const authMiddleware = async (req, res, next) => {
  let token = req.cookies.token;
  if (!token) {
    res.status(401).json("User not logged in");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    if (!user) {
      return res.status(404).json("User not found");
    }
    req.user = user;
    return next();
  } catch (error) {
    res.status(401).json(error);
  }
};

export default authMiddleware;
