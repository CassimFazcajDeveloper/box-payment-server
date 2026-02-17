const stripeService =
  require('../services/stripeService');

exports.createPaymentIntent =
  async (req, res) => {
    try {
      const { boxes, totalAmount } = req.body;

      // TODO: validate boxes availability

      const paymentIntent =
        await stripeService
          .createPaymentIntent(totalAmount);

      res.send({
        clientSecret:
          paymentIntent.client_secret
      });

    } catch (err) {
      res.status(500).send(err.message);
    }
};
