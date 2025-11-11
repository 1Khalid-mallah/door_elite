import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("Database Connected");
    mongoose.connection.on("connected", () => console.log("Database Connected"));
    mongoose.connection.on("error", (error) => console.error("Database connection error:", error));
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
