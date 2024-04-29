const express = require("express");
const router = express.Router();
const admin = require("../controllers/adminControllers");

router.get("/admin", admin.getUserData);
router.post("/admin/add", admin.addUser);
router.delete("/admin/delete/:id", admin.deleteUser);
router.put("/admin/edit/:id", admin.editUser);

module.exports = router;
