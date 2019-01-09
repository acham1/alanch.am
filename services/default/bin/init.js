#!/usr/bin/env node

const http = require("http");
const initApp = require("../app/express");

initApp().then(app => {
  const port = Number(process.env.PORT || "3000");
  const server = http.createServer(app);
  server.listen(port);
});
