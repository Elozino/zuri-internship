const express = require("express");
const router = express.Router();
const controller = require("../controllers/flightController");

router.get("/", controller.getAllFlights);
router.get("/:id", controller.getSingleFlight);
router.post("/", controller.addBookFlight);
router.patch("/:id", controller.editFlight);
router.delete("/:id", controller.deleteFlight);

module.exports = router;
