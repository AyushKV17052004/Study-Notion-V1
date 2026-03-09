const express = require("express");
const router = express.Router();

const {
  createRating,
  getAvgRating,
  getCourseRatings,
  getAllRatings
} = require("../controllers/RatingAndReview");

const { auth, isStudent, isAdmin } = require("../middleware/auth");


// ================= RATINGS & REVIEWS =================

// Create rating (Only enrolled STUDENT)
router.post(
  "/create",
  auth,
  isStudent,
  createRating
);

// Get average rating of a course
router.post(
  "/average",
  getAvgRating
);

// Get all ratings of a single course
router.post(
  "/course",
  getCourseRatings
);

// Get all ratings (ADMIN / Public homepage)
router.get(
  "/all",
  getAllRatings
);

module.exports = router;
