// routes/auth.js
import { Router } from "express";
import upload from "../multerConfig.js"; // Import upload from multerConfig

const router = Router();
import {
  register,
  login,
  getUserData,
  logout,
  createReport,
} from "../controllers/authController.js";

router.post("/report", upload.single("evidence"), createReport);

// Route for user registration
router.post("/register", register);
// Route for user login
router.post("/login", login);
// Route for fetching user data
router.get("/user", getUserData);
// Route for logging out
router.post("/logout", logout);

export default router;
