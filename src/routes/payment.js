const express = require('express');
const router = express.Router();

router.post(
  '/create-intent',
  paymentController.createPaymentIntent
);

module.exports = router;
