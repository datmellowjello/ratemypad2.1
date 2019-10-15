const router = require("express").Router();
const placesRoutes = require("./places");

// Places routes
router.use("/places", placesRoutes);

module.exports = router;