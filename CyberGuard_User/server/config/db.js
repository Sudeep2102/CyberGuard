// config/db.js
import { connect } from "mongoose";

const connectDB = async () => {
  try {
    await connect("mongodb+srv://sudeep:sudeep@cluster0.tdu58hp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectDB;
