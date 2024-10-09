import express from "express";
import cors from "cors";
import { json } from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS
app.use(json());
app.use("/uploads", express.static("uploads"));
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Routes
app.use("/api/auth", authRoutes);

// Start the server
const PORT = process.env.PORT || 3001; // Use port 3001 for backend
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
