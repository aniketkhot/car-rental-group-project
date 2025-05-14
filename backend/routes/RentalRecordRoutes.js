const express = require("express");
const router = express.Router();
const { getAllRentalRecords,addTestRecords} = require("../controllers/RentalRecordController");
router.get("/", getAllRentalRecords);

router.get("/test", addTestRecords);

module.exports = router;

