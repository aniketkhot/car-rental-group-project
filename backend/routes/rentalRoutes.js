const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  createRental,
  getRentals,
  getRentalById,
  updateRental,
  deleteRental,
  getByUser,
} = require("../controllers/rentalController");

const { restrictIfNotOwnerOrAdmin } = require("../middleware/roleProxy");
const Rental = require("../models/Rental");

router.post("/", protect, createRental);

const { restrictTo } = require("../middleware/roleProxy");



router.get(
  "/",
  protect,
  restrictTo("admin"),
  getRentals
);


router.get("/by-user", protect, getByUser);
router.get("/:id", protect, getRentalById);
router.put("/:id", protect, updateRental);
router.delete("/:id", protect, deleteRental);

module.exports = router;
