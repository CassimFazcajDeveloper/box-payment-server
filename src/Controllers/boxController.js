const Box = require("../models/Box");

exports.getBoxes = async (req, res) => {
  const boxes = await Box.find();
  res.json(boxes);
};

exports.markBoxesPaid = async (req, res) => {
  const { boxes } = req.body;

  await Box.updateMany(
    { number: { $in: boxes } },
    { occupied: true }
  );

  res.json({ message: "Boxes marked as paid" });
};
