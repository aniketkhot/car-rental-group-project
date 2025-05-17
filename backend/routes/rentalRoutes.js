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
router.get("/",  getRentals);
router.get("/by-customer",  getByCustomer);
router.get("/:id",  getRentalById);
router.put("/:id",  updateRental);
router.delete("/:id",  deleteRental);

module.exports = router;

