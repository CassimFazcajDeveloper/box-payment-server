const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const payment = require("./routes/payment");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/payments", payment);
app.use(
  '/api/payments',
  require('./routes/paymentRoutes')
);

app.use(
  '/api/webhooks',
  require('./routes/webhookRoutes')
);

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/boxDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});


// const express = require('express');
// const app = express();

// app.use(express.json());

// app.use(
//   '/api/payments',
//   require('./routes/paymentRoutes')
// );

// app.use(
//   '/api/webhooks',
//   require('./routes/webhookRoutes')
// );
