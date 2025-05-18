const express = require("express");
const { payForRental, getAllTransactions } = require("../controllers/paymentController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/pay", protect, payForRental);
router.get("/logs", protect, getAllTransactions);

module.exports = router;
