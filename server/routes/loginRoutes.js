const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginControllers");

router.post("/login", loginController.login);

module.exports = router;
