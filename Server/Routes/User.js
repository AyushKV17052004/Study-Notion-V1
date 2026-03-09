const express = require("express");
const router = express.Router();

// Controllers
const {
  OTPController,
  SignUpController,
  LogInController,
  changePasswordController
} = require("../controllers/Auth");

const {
  resetController,
  changePassword
} = require("../controllers/resetPassword");

const {
  ProfileUpdate,
  updateImageAndPass,
  deleteAccount,
  getProfile
} = require("../controllers/Profile");


// Middleware
const { auth } = require("../middleware/auth");


// ================= AUTH =================

// Send OTP (Signup Step 1)
router.post("/send-otp", OTPController);

// Signup (Signup Step 2)
router.post("/signup", SignUpController);

// Login
router.post("/login", LogInController);

// Change password (logged-in user)
router.put("/change-password", auth, changePasswordController);


// ================= PASSWORD RESET =================

// Send reset password link
router.post("/reset-password-token", resetController);

// Reset password using token
router.post("/reset-password", changePassword);


// ================= PROFILE =================

// Get logged-in user profile
router.get("/profile", auth, getProfile);

// Update profile details
router.put("/profile/update", auth, ProfileUpdate);

// Update profile image
router.put("/profile/image", auth, updateImageAndPass);

// Delete user account
router.delete("/profile/delete", auth, deleteAccount);




module.exports = router;
