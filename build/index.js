"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
console.log(process.env.PING_LISTEN_PORT);
var PORT = (_a = process.env.PING_LISTEN_PORT) !== null && _a !== void 0 ? _a : 8080;
var serverListener = function (request, response) {
    if (request.method === "GET" && request.url === "/ping") {
        response.setHeader("Content-Type", "application/json");
        response.write(JSON.stringify(request.headers));
        response.end();
    }
    else {
        response.statusCode = 404;
        response.end();
    }
};
var server = (0, http_1.createServer)(serverListener);
server.listen(PORT);
console.log("Starting server on port : " + PORT);
