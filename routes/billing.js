const express = require("express");
const router = express.Router();
// install stripe on server side and require
const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
router.post("/api/stripe", (req, res) => {
  res;
});
module.exports = router;
