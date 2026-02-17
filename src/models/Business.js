const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  description: String
});

module.exports = mongoose.model("Business", businessSchema);
