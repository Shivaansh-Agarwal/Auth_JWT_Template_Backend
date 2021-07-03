const express = require("express");
const jwt = require("jsonwebtoken");
const { logger } = require("../middlewares/logger.js");
const { tokenVerifier } = require("../middlewares/tokenVerifier.js");

const profileRouter = express.Router();

profileRouter.use(logger);
profileRouter.use(tokenVerifier);

profileRouter.route("/").get(async (req, res) => {
  try {
    res.status(200).json({
      name: "shivaansh",
      age: 23,
      profession: "Software Development",
    });
  } catch (err) {
    res.status(400).json({ message: "Error in fetching Profile!" });
  }
});

module.exports = { profileRouter };