const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  createRental,
  getRentals,
  getRentalById,
  updateRental,
  deleteRental,
  getByCustomer,
} = require("../controllers/rentalController");

router.post("/", createRental);
router.get("/", protect, getRentals);
router.get("/by-customer", protect, getByCustomer);
router.get("/:id", protect, getRentalById);
router.put("/:id", protect, updateRental);
router.delete("/:id", protect, deleteRental);

module.exports = router;

