const router = require("express").Router();
const noteController = require("../../controllers/noteController");

// Matches with "/api/books"
router.route("/")
  .get(noteController.findAll);
  

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(noteController.findById)
  .put(noteController.update)
  .post(noteController.create)
  .delete(noteController.remove) ;

module.exports = router;