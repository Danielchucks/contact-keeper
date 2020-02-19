const express = require("express");
const router = express.Router();

// @route   GET app/contacts
// @desc    Get all users contact
// @access  Private
router.get("/", (req, res) => {
   res.send("Get all contact");
});

// @route      POST app/contacts
// @desc       Get all users contact
// @access     Private
router.post("/", (req, res) => {
   res.send("Get all contact");
});

// @route      PUT app/contacts/:id
// @desc       Update contact
// @access     Private
router.put("/:id", (req, res) => {
   res.send("Upate contact");
});

// @route      Delete app/contacts/:id
// @desc       Delete contact
// @access     Private
router.delete("/:id", (req, res) => {
   res.send("Delete contact");
});

module.exports = router;
