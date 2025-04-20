import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import captainModel from "../models/captain.model.js";
dotenv.config();

export const authUser = async (req, res, next) => {
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

export const authCaptain = async (req, res, next) => {
  let token = req.cookies.token;
  if (!token) {
    res.status(401).json("Captain not logged in");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);
    if (!captain) {
      return res.status(404).json("Captain not found");
    }
    req.captain = captain;
    return next();
  } catch (error) {
    res.status(401).json(error);
  }
};
