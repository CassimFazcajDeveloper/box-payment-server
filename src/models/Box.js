const mongoose = require("mongoose");

const boxSchema = new mongoose.Schema({
  number: Number,
  line: Number,
  occupied: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Box", boxSchema);
