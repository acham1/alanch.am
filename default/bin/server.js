const express = require("express");
const http = require("http");

const DEFAULT_PORT = 3000;

const app = express();
app.use(express.static("build"));

const server = http.Server(app);
server.listen(process.env.PORT || DEFAULT_PORT);
server.on("listening", x => {
  console.log(`Listening on port ${server.address().port}`);
});
