
const Rental = require('../models/Rental');
const { createRental } = require('../utils/factory');
const {
  StandardPricing,
  CorporatePricing,
  WeekendPricing,
  LongTermPricing,
  PeakSeasonPricing
} = require('../services/pricingStrategy');


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
    const {
      car,
      user,
      startDate,
      endDate,
      pricePerDay,
      paymentStatus,
      rentalStatus,
      isCorporate,
      notes
    } = req.body;

    const start = new Date(startDate);
    const end = new Date(endDate);
    const rentalDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    if (rentalDays <= 0) {
      return res.status(400).json({ message: "End date must be after start date." });
    }

    let strategy = new StandardPricing();

    if (isCorporate) {
      strategy = new CorporatePricing();
    } else if (rentalDays > 7) {
      strategy = new LongTermPricing();
    } else if (
      new Date(startDate) >= new Date("2025-12-15") &&
      new Date(startDate) <= new Date("2026-01-10")
    ) {
      strategy = new PeakSeasonPricing();
    } else {
      strategy = new WeekendPricing();
    }

    const totalPrice = strategy.calculate(pricePerDay, rentalDays, start);

    const rentalData = createRental({
      user,
      car,
      startDate,
      endDate,
      pricePerDay,
      totalPrice,
      paymentStatus,
      rentalStatus,
      isCorporate,
      notes
    });

    const rental = new Rental(rentalData);
    await rental.save();

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
