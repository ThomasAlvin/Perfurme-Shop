const express = require("express");
const router = express.Router();
const adminController = require("../controllers").adminController;

router.get("/", adminController.getAll);
router.get("/:id", adminController.getById);
router.post("/v1", adminController.createAdmin);
router.post("/login", adminController.loginV2);

module.exports = router;
