// controllers/authController.js
import User from "../models/User.js";
import Report from "../models/Report.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export async function register(req, res) {
  const { name, email, phone, state, password } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ $or: [{ email }, { phone }] });

    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create a new user
    user = new User({ name, email, phone, state, password });

    // Save the user to the database
    await user.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    if (error.code === 11000) {
      // Duplicate key error
      return res.status(400).json({ msg: "Email or phone number already registered" });
    } else {
      return res.status(500).json({ msg: "Internal server error" });
    }
  }
}

export async function login(req, res) {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // If credentials are correct, generate JWT token
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      "jwtSecret",
      { expiresIn: 3600 }, // Token expires in 1 hour
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error("Error logging in user:", error.message);
    res.status(500).send("Server Error");
  }
}

export async function getUserData(req, res) {
  try {
    // Extract user id from JWT token
    const userId = req.user.id;
    // Fetch user data from database based on user id
    const user = await User.findById(userId);
    // Respond with user data
    res.json(user);
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    res.status(500).send("Server Error");
  }
}

// Function to logout
export async function logout(req, res) {
  try {
    // Optionally, you can perform additional logout actions here
    res.json({ msg: "Logout successful" });
  } catch (error) {
    console.error("Error logging out:", error.message);
    res.status(500).send("Server Error");
  }
}

export async function createReport(req, res) {
  try {
    const { dateTime, state, district, platform, platformId, email, description } =
      req.body;

    const evidence = req.file.path;

    const newReport = new Report({
      dateTime,
      state,
      district,
      platform,
      platformId,
      evidence,
      email,
      description,
    });

    await newReport.save();

    res
      .status(201)
      .json({ success: true, message: "Report created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
