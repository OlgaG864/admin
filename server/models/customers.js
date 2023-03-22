const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
});

const Customer = mongoose.model("Customer", customerSchema);

exports.Customer = Customer;
