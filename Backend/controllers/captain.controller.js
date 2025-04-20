import captainModel from "../models/captain.model.js";
import { cookie, validationResult } from "express-validator";
import userModel from "../models/user.model.js";

export const registerCaptain = async (req, res) => {
  const { firstname, lastname, email, password, socketId, vehicle, location } =
    req.body;
  if (!firstname || !lastname || !email || !password || !socketId || !vehicle) {
    console.log("All fields are required");
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const existingCaptain = await captainModel.findOne({ email });
  if (existingCaptain) {
    return res.status(409).json({ message: "Email already registered" });
  }

  const hashedpassword = await userModel.hashPassword(password);

  const captain = await captainModel.create({
    firstname,
    lastname,
    email,
    password: hashedpassword,
    socketId,
    vehicle: {
      color: vehicle.color,
      capacity: vehicle.capacity,
      plate: vehicle.plate,
      vehicleType: vehicle.vehicleType,
    },
    location: {
      lat: location.lat,
      lng: location.lng,
    },
  });

  const token = captain.generateAuthToken();

  res.cookie("token", token);

  res.status(201).json({ token, captain });
};
