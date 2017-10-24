const router = require("express").Router();
const scheduleController = require("../../controllers/scheduleController");

//find all event and create them
router.get("/", function (req,res){
 res.send(scheduleController.findAll);
})
//.get(scheduleController.findAll); // err here

router.post("/:id", function (req,res){
    res.send(scheduleController.createEvent);
   })

router.delete("/:id", function (req,res){
    res.send(scheduleController.removeEvent);
   })   

/*router.route("/:id")
.post(scheduleController.createEvent)
.delete(scheduleController.removeEvent);
*/

module.exports = router;