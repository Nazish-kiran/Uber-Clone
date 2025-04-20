import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express, { urlencoded } from "express";
import connectDb from "./db/db.js";
connectDb();
import userRoutes from "./routes/user.routes.js";
import captainRoutes from "./routes/captain.routes.js";

import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/users", userRoutes);
app.use("/captain", captainRoutes);


export default app;
