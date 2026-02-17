const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  boxes: [Number],
  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business"
  },
  amount: Number,
  status: {
    type: String,
    default: "pending"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Payment", paymentSchema);
