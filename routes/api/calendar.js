const router = require("express").Router();
const scheduleController = require("../../controllers/scheduleController");

//find all event and create them
router.route("/")
.get(scheduleController.findAll);

router.route("/:id")
.post(scheduleController.createEvent)
.delete(scheduleController.removeEvent);


module.exports = router;