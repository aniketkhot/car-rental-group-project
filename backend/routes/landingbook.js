const router = require('express').Router();
const LandingBooking = require('../models/landingbook'); 


router.get('/', async (req, res) => {
  try {
    const bookings = await LandingBooking.find()
      .populate('carId')
      .populate('customerId');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/', async (req, res) => {
  const { carId, customerId, pickupDate, dropoffDate } = req.body;

  try {
    const newLandingBooking = new LandingBooking({
      carId,
      customerId,
      pickupDate: new Date(pickupDate),
      dropoffDate: new Date(dropoffDate),
    });
    await newLandingBooking.save(); 
    res.status(201).json({ message: 'booking sccuess', LandingBooking: newLandingBooking });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;