const express = require("express");
const router = express.Router();
const requireLogin = require("../middlewares/requireLogin");
// install stripe on server side and require
const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

router.post("/api/stripe", requireLogin, (req, res) => {
  // console.log(req.body);
  // create an build the credit card
  // https://stripe.com/docs/api/charges/create?lang=node
  stripe.charges
    .create({
      amount: 500,
      currency: "aud",
      source: req.body.id, // obtained with Stripe.js
      description: "$5 for 5 credits"
    })
    .then(() => {
      // if the credit card details were successfully received update the suer credits and save to db and return(send) the user object
      console.log("############");
      req.user.credits += 5;
      req.user.save().then(user => res.send(user));
    });
  // click add credits and notice the stripe link on the network tab returns 200, click on the stripe and switch to preview section and notice the res.send(user) returns a user object with credit score 5
});

module.exports = router;
