import express from "express";
import cors from "cors";
import { json } from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import upload from "./multerConfig.js"; // Import the upload middleware

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

app.post('/upload', upload.single('file'), (req, res) => {
  const filePath = `uploads/${req.file.filename}`;
  // Save filePath in the database
  res.json({ filePath });
});

// Start the server
const PORT = process.env.PORT || 3001; // Use port 3001 for backend
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});