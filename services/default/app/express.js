const express = require("express");
const logger = require("morgan")("combined");

const app = express();
app.use(logger);

module.exports = app;
