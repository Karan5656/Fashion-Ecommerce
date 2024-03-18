const router = require("express").Router();
const stripe = require("stripe")('sk_test_51KyCRqSJ75DCJwlNvDP8SczpgyTc54GZB8ksJsn2acjea7EbEKF7XVWlMhZjzgPjr0kL7uKyDUDhKBmafGWRTSiW00B1aPj5PQ');

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;