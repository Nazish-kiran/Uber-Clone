import express from "express";
import { body } from "express-validator";
import {
  registerCaptain,
  loginCaptain,
  logoutCaptain
} from "../controllers/captain.controller.js";
import { authCaptain } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post(
  "/register",
  [
    // First Name
    body("firstname")
      .trim()
      .notEmpty()
      .withMessage("First name is required")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),

    // Last Name
    body("lastname")
      .optional()
      .isLength({ min: 3 })
      .withMessage("Last name must be at least 3 characters long"),

    // Email
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid email")
      .isLength({ min: 5 })
      .withMessage("Email must be at least 5 characters long")
      .normalizeEmail(),

    // Password
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),

    // Socket ID
    body("socketId").notEmpty().withMessage("Socket ID is required"),

    // Vehicle
    body("vehicle.color")
      .notEmpty()
      .withMessage("Vehicle color is required")
      .isLength({ min: 3 })
      .withMessage("Color must be at least 3 characters long"),

    body("vehicle.capacity")
      .notEmpty()
      .withMessage("Vehicle capacity is required")
      .isInt({ min: 3 })
      .withMessage("Capacity must be at least 3"),

    body("vehicle.plate")
      .notEmpty()
      .withMessage("Vehicle plate is required")
      .isLength({ min: 3 })
      .withMessage("Plate must be at least 3 characters long"),

    body("vehicle.vehicleType")
      .notEmpty()
      .withMessage("Vehicle type is required")
      .isIn(["car", "motorcycle", "auto"])
      .withMessage("Vehicle type must be one of: car, motorcycle, auto"),

    // Location (optional)
    body("location.lat")
      .optional()
      .isFloat()
      .withMessage("Latitude must be a number"),

    body("location.lng")
      .optional()
      .isFloat()
      .withMessage("Longitude must be a number"),
  ],
  registerCaptain
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password Must be atleast 6 characters long"),
  ],
  loginCaptain
);
router.get("/logout",authCaptain,logoutCaptain);

export default router;
