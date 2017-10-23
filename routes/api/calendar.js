const router = require("express").Router();
const calendarController = require("../../controllers/calendarController");

//find all event and create them
router.route("/")
.get(calendarController.findAll);

router.route("/:id")
.post(calendarController.createEvent)
.delete(calendarController.removeEvent);


module.exports = router;