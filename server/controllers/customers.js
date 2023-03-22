const { Customer } = require("../models/customers");

module.exports = {
  getAll: async function (req, res, next) {
    try {
      const result = await Customer.find({});
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(400).send("error getting customers");
    }
  },

  add: async function (req, res, next) {
    try {
      const newCustomer = new Customer(req.body); // todo: add validation
      const result = await newCustomer.save();
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(400).send("error add customer");
    }
  },
};
