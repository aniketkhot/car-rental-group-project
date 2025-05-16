const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController");

router.post("/", carController.createCar);
router.get("/", carController.getCars);
router.get("/:id", carController.getCarById);
router.put("/:id", carController.updateCar);
router.delete("/:id", carController.deleteCar);

router.get('/:id', async (req, res) => {
    try {
      const car = await Car.findById(req.params.id);
      if (!car) return res.status(404).json({ message: 'Car not found' });
      res.json(car);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  

module.exports = router;
