const RentalRecord = require('../models/RentalRecord');

const getAllRentalRecords = async (req, res) => {
  try {
    const records = await RentalRecord.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch rental records' });
  }
};

const addTestRecords = async (req, res) => {
  try {
    const records = [
      {
        carName: "Audi Sq2",
        customerName: "Ian Johnson",
        leaseDate: "2025-05-03",
        returnDate: "2025-07-03",
        status: "Completed",
      },
      {
        carName: "Jeep Wrangler",
        customerName: "Daniel Chen",
        leaseDate: "2025-07-03",
        returnDate: "2025-09-03",
        status: "Completed",
      },
      {
        carName: "Nissan Versa",
        customerName: "David Lee",
        leaseDate: "2025-04-04",
        returnDate: "2025-12-04",
        status: "Completed",
      },
      {
        carName: "Audi A5",
        customerName: "Sophia Gibson",
        leaseDate: "2025-10-05",
        returnDate: null,
        status: "Active",
      },
      {
        carName: "BMW",
        customerName: "Camile Granger",
        leaseDate: "2025-12-05",
        returnDate: null,
        status: "Active",
      },
    ];

    await RentalRecord.insertMany(records);
    res.status(201).json({ message: "Test rental records added!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllRentalRecords,
  addTestRecords,
};
