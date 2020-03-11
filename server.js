
const express = require("express");
const path = require("path");

var app = express();
const PORT = normalizePort(process.env.PORT || "5000");

app
  .use(express.json())
  .use(express.urlencoded({ extended: false }))

/**
 * * Front Angular
 */
app
  .use(express.static(path.join(__dirname, "./dist/nebular-start")))
  .get("*", (req, res) => res.sendFile(path.join(__dirname,'./dist/nebular-start/index.html')));

/**
 * Listen
 */
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

/**
 * Get port from environment and store in Express.
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val; // pipe
  }
  if (port >= 0) {
    return port; // port
  }
  return false;
}



