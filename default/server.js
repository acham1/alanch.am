const express = require("express");
const http = require("http");

const app = express();
app.use(express.static("build"));

const server = http.Server(app);
server.listen(process.env.PORT);
