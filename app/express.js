const express = require("express");
const logger = require("morgan")("combined");
const defaultResponse = require("../lib/sendFile");

const app = express();
app.use(logger);
app.use(defaultResponse("index.html", { root: "./public" }));

module.exports = app;
