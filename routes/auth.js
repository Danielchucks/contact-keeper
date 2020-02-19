const express = require("express");
const router = express.Router();

// @route   GET app/auth
// @desc    Get logged in user
// @access  Private
router.get("/", (req, res) => {
   res.send("Register a user");
});

// @route   POST app/auth
// @desc    Auth user & get token
// @access  Public
router.post("/", (req, res) => {
   res.send("Log in User");
});

module.exports = router;
