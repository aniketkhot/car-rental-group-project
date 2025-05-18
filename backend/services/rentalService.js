const Rental = require("../models/Rental");
const { createRental } = require("./../utils/factory");

const {
  StandardPricing,
  CorporatePricing,
  WeekendPricing,
  LongTermPricing,
  PeakSeasonPricing
} = require("./pricingStrategy");

function calculateRentalDays(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
}

function selectPricingStrategy(startDate, rentalDays, isCorporate) {
  const start = new Date(startDate);

  if (isCorporate) {
    return new CorporatePricing();
  }

  if (rentalDays > 7) {
    return new LongTermPricing();
  }

  if (
    start >= new Date("2025-12-15") &&
    start <= new Date("2026-01-10")
  ) {
    return new PeakSeasonPricing();
  }

  return new WeekendPricing();
}

async function createNewRental(data) {
  const {
    customer,
    car,
    startDate,
    endDate,
    pricePerDay,
    isCorporate,
    paymentStatus,
    rentalStatus,
    notes
  } = data;

  const rentalDays = calculateRentalDays(startDate, endDate);

  if (rentalDays <= 0) {
    throw new Error("End date must be after start date.");
  }

  const strategy = selectPricingStrategy(startDate, rentalDays, isCorporate);
  const totalPrice = strategy.calculate(pricePerDay, rentalDays, new Date(startDate));

  const rentalData = createRental({
    customer,
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
  return await rental.save();
}

module.exports = {
  createNewRental,
  calculateRentalDays,
  selectPricingStrategy
};
