const router = require("express").Router();
const placesController = require("../../controllers/placesController");

// Matches with "/api/books"
router.route("/")
  .get(placesController.findAll)
  .post(placesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(placesController.findById)
  .put(placesController.update)
  .delete(placesController.remove);

module.exports = router;
