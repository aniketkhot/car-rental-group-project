const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { protect } = require('../middleware/authMiddleware');
const { restrictTo } = require('../middleware/roleProxy');

router.get('/', protect, restrictTo('admin'), userController.getUsers);


router.post("/", userController.createUser);

router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
