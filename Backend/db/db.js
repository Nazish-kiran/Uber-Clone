import mongoose from "mongoose";

const connectDb = () => {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log("connected to database");
    })
    .catch((error) => {
      console.log("db error:" + error);
    });
};

export default connectDb;
