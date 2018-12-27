#!/usr/bin/env node

const expressApp = require("../app/express");
const http = require("http");

const port = Number(process.env.PORT || "3000");
const server = http.createServer(expressApp);
const onListening = () => console.info("Listening on " + server.address().port);

server.listen(port);
server.on("listening", onListening);
