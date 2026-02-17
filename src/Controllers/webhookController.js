const stripe = require('stripe')
  (process.env.STRIPE_SECRET_KEY);

exports.handleWebhook = (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400)
      .send(`Webhook Error: ${err.message}`);
  }

  if (event.type ===
      'payment_intent.succeeded') {

    const paymentIntent =
      event.data.object;

    console.log(
      'Payment successful:',
      paymentIntent.id
    );

    // ✅ Mark boxes as paid here
    // ✅ Save payment record
  }

  res.json({ received: true });
};
