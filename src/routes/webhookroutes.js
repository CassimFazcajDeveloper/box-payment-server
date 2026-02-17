const express = require('express');
const router = express.Router();

// Stripe requires raw body
router.post(
  '/stripe',
  express.raw({ type: 'application/json' }),
  webhookController.handleWebhook
);

module.exports = router;
