const express = require("express");
const logger = require("morgan");
const bucketProxy = require("../lib/bucketProxy");

const ASSETS_BUCKET_NAME = "assets.alanch.am";

module.exports = async () => {
  const app = express();
  app.use(logger("combined"));
  app.use(await bucketProxy(ASSETS_BUCKET_NAME));
  return app;
};
