const express = require("express");
const router = express.Router();
const eventController = require("../controllers").eventController;

router.get("/", eventController.getAll);
router.get("/HR/:id", eventController.getByHRId);
router.get("/:id", eventController.getById);
router.post("/v1", eventController.createEvent);

module.exports = router;
