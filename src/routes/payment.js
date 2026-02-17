const router = require("express").Router();
const paymentController =
  require("../Controllers/PaymentController");

router.post("/create",
  paymentController.createPayment
);

module.exports = router;
