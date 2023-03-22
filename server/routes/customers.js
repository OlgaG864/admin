var express = require("express");
var router = express.Router();
const customers = require("../controllers/customers");

router.get("/", customers.getAll);
router.post("/", customers.add);

module.exports = router;
