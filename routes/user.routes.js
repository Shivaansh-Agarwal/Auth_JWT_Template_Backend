const express = require("express");
const jwt = require("jsonwebtoken");
const { logger } = require("../middlewares/logger.js");
const { tokenVerifier } = require("../middlewares/tokenVerifier.js");

const userRouter = express.Router();

userRouter.use(logger);
userRouter.use(tokenVerifier);

userRouter.route("/").get(async (req, res) => {
  try {
    res.status(200).json({
      name: "shivaansh",
      age: 23,
      pincode: "202001",
    });
  } catch (err) {
    res.status(400).json({ message: "Error!" });
  }
});

module.exports = { userRouter };
