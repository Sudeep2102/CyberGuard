const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");

// Load environment variables securely (optional)
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000; // Use environment variable for port

// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Middleware
app.use(cors({ origin: "http://localhost:3002" })); // Adjust your frontend origin
app.use(express.json());

// Define User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  state: String,
});

const User = mongoose.model("User", userSchema);

// Define Report Schema
const reportSchema = new mongoose.Schema({
  dateTime: Date,
  state: String,
  district: String,
  platform: String,
  platformId: String,
  evidence: String,
  description: String,
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to User ID
});

const Report = mongoose.model("Report", reportSchema);

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',  // Or use a different email provider
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

// API Endpoints for Users

// Get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Create a new user
app.post("/api/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Update a user
app.put("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete a user
app.delete("/api/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// API Endpoint to Assign Report and Send Email

app.post("/api/reports/assign", async (req, res) => {
  const { reportId, userId } = req.body;

  try {
    // Find the user to get their email
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the report to be assigned to the user
    const updatedReport = await Report.findByIdAndUpdate(
      reportId,
      { assignedTo: userId },
      { new: true }
    );
    if (!updatedReport) {
      return res.status(404).json({ message: "Report not found" });
    }

    // Send the email notification to the user
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: `Report Assignment Notification`,
      text: `Dear ${user.name},\n\nA new report has been assigned to you.\n\nReport ID: ${reportId}\nDescription: ${updatedReport.description}\n\nPlease check the system for more details.\n\nBest Regards,\nYour Team`
    };

    await transporter.sendMail(mailOptions);
    res.json({ message: "Report assigned and email sent successfully." });
  } catch (err) {
    console.error("Error assigning report:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// API Endpoints for Reports

// Get all reports
app.get('/uploads/:filePath', (req, res) => {
  const filePath = req.params.filePath;
  res.sendFile(path.join(__dirname, '..', 'uploads', filePath));
});

app.get("/api/reports", async (req, res) => {
  try {
    const reports = await Report.find().populate('assignedTo', 'name email');
    res.json(reports);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Create a new report
app.post("/api/reports", async (req, res) => {
  try {
    const newReport = new Report(req.body);
    await newReport.save();
    res.json(newReport);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Update a report
app.put("/api/reports/:id", async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedReport = await Report.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedReport) {
      return res.status(404).json({ message: "Report not found" });
    }
    res.json(updatedReport);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete a report
app.delete("/api/reports/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedReport = await Report.findByIdAndDelete(id);
    if (!deletedReport) {
      return res.status(404).json({ message: "Report not found" });
    }
    res.json({ message: "Report deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
