const express = require("express");
const router = express.Router();
const {protect} = require("../middlewares/authMiddleware");

const {
  registerUser,
  authUser,
  updateUserProfile,
} = require("../controllers/userController");

router.route("/register").post(registerUser);
router.route("/login").post(authUser);
router.route("/profile").post(protect, updateUserProfile);

module.exports = router;
