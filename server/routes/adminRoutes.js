const express = require("express");
const router = express.Router();
const admin = require("../controllers/adminControllers");

router.post("/admin", admin);

module.exports = router;
