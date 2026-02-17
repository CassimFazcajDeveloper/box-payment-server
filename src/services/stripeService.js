const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

exports.createPaymentIntent = async (amount) => {
  return await stripe.paymentIntents.create({
    amount: amount * 100, // cents
    currency: 'usd', // or mwk if supported
    automatic_payment_methods: { enabled: true }
  });
};
