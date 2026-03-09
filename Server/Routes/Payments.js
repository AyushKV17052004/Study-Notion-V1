const express = require("express");
const router = express.Router();

const {
  capturePayment,
  verifyResponse
} = require("../controllers/Payment");

const { auth, isStudent } = require("../middleware/auth");


// ================= PAYMENTS =================

// Create Razorpay order (Student purchases course)
router.post(
  "/capture",
  auth,
  isStudent,
  capturePayment
);

// Razorpay webhook (NO auth – Razorpay server)
router.post(
  "/verify",
  verifyResponse
);

module.exports = router;
