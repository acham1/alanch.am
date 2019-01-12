#!/usr/bin/env node

const http = require("http");
const app = require("../app/express");

const port = Number(process.env.PORT || "3000");
const server = http.createServer(app);
server.listen(port);
