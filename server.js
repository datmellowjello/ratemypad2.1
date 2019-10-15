require("dotenv").config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();


require("./routes/api/apiRoutes")(app);

const db = require("./models");
const models = require("./models");


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const syncOptions = { force: false};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}`);
});
});

module.exports = app;