const router = require("express").Router();
const calendarController = require("../../controllers/calendarController");

//find all event and create them
router.route("/")
.get(calendarController.findAll)
.post(calendarController.createEvent);

module.exports = router;