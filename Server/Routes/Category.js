const express = require("express");
const router = express.Router();

const {
  createCategory,
  getAllCategory,
  categoryPageDetails
} = require("../controllers/category");

const { auth, isAdmin } = require("../middleware/auth");


// ================= CATEGORY =================

// Create category (ADMIN ONLY)
router.post(
  "/create",
  auth,
  isAdmin,
  createCategory
);

// Get all categories (Public)
router.get(
  "/all",
  getAllCategory
);

// Get category page details (courses by category)
router.post(
  "/details",
  categoryPageDetails
);

module.exports = router;
