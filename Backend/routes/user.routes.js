import express from "express";
import { body } from "express-validator";
import {
  registerUser,
  loginUser,
  geUserProfile,
  logoutUser,
} from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("lastname")
      .isLength({ min: 3 })
      .withMessage("Last name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password Must be atleast 6 characters long"),
  ],
  registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password Must be atleast 6 characters long"),
  ],
  loginUser
);

router.get("/profile", authMiddleware, geUserProfile);
router.get("/logout", authMiddleware, logoutUser);

export default router;
