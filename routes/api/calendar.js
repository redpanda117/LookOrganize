const router = require("express").Router();
const authController = require("../../controllers/calendarController");

//find all event and create them
router.route("/")
.get(challengesController.findAll)
.post(challengesController.createEvent);

module.exports = router;