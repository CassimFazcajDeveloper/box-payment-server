const Payment = require("../models/Payment");

exports.calculateAmount = (boxes) => {
  const pricePerBox = 5;
  return boxes.length * pricePerBox;
};

exports.createPaymentRecord = async (data) => {
  const payment = new Payment(data);
  return await payment.save();
};
