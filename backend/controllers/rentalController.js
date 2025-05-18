
const Rental = require('../models/Rental');

const { createNewRental } = require("../services/rentalService");


exports.getByUser = async (req, res) => {
  try {
    const rentals = await Rental
      .find({ user: req.user.id })
      .populate("car")
      .populate("user")
      .sort({ startDate: -1 });
    res.json(rentals);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};






exports.createRental = async (req, res) => {
  try {
    const rental = await createNewRental(req.body);
    res.status(201).json(rental);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.getRentals = async (req, res) => {
  try {
    const rentals = await Rental
      .find()
      .populate("car")
      .populate("user")
      .sort({ startDate: -1 });
    res.json(rentals);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getRentalById = async (req, res) => {
  try {
    const rental = await Rental
      .findById(req.params.id)
      .populate("car")
      .populate("user");
    if (!rental) return res.status(404).json({ message: "Not found" });
    res.json(rental);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateRental = async (req, res) => {
  try {
    const rental = await Rental.findById(req.params.id);
    if (!rental) return res.status(404).json({ message: "Not found" });
    if (rental.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Forbidden" });
    }
    const { car, startDate, active } = req.body;
    rental.car = car !== undefined ? car : rental.car;
    rental.startDate = startDate !== undefined ? startDate : rental.startDate;
    rental.active = active !== undefined ? active : rental.active;
    await rental.save();
    const updated = await Rental
      .findById(rental._id)
      .populate("car")
      .populate("user");
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteRental = async (req, res) => {
  try {
    const rental = await Rental.findById(req.params.id);
    if (!rental) return res.status(404).json({ message: "Not found" });
    if (rental.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Forbidden" });
    }
    await rental.remove();
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};
