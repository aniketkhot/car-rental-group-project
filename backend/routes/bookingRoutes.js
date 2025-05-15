const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.post('/checkout', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: 'Booking confirmed!' });
  } catch (err) {
    res.status(500).json({ error: 'Booking failed', details: err.message });
  }
});

module.exports = router;
