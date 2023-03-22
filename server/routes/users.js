var express = require("express");
var router = express.Router();
const users = require("../controllers/users");

/* GET users listing. */
router.post("/signup", users.signup);
router.post("/login", users.login);

module.exports = router;
