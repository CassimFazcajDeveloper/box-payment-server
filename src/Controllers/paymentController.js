const Box = require("../models/Box");
const Business = require("../models/Business");


exports.createPayment = async (req, res) => {
  try {
    const { boxes, business } = req.body;

    // Check if boxes already occupied
    const taken = await Box.find({
      number: { $in: boxes },
      occupied: true
    });

    if (taken.length > 0) {
      return res.status(400).json({
        message: "Some boxes already taken"
      });
    }

    // Save business
    const newBusiness = new Business(business);
    await newBusiness.save();

    // Calculate amount
    const amount = paymentService.calculateAmount(boxes);

    // Create payment
    const payment =
      await paymentService.createPaymentRecord({
        boxes,
        businessId: newBusiness._id,
        amount
      });

    res.json({
      message: "Payment initiated",
      payment
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
